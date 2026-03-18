import axios from "axios";
import { useEffect, useRef } from "react";
import { type DataServiceProps } from "@/common/DataService/interface/DataServiceInterface";
// import { runtimeConfig } from "@/config/runtime-config";
// import { getBackendUrl } from "@/utils/getBackendUrl";

const api = axios.create();

api.interceptors.request.use(
  (req) => {

    const token =
      (window as any).__JWT_TOKEN__ || sessionStorage.getItem("jwtToken");
    console.log("Attaching token to request:", token);
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
      req.withCredentials = false;
    } else {
      req.withCredentials = true;
    }
  

    // 3. Set dynamic baseURL from shared config if not already set
    if (!req.baseURL) {
      const stored = sessionStorage.getItem("module-config");
      const config =
        (window as any).__APP_CONFIG__ || (stored ? JSON.parse(stored) : null);

      if (config) {
        const mainModule = config.modules?.find(
          (m: any) => m.key === "workforce"
        );
        const subModule = mainModule?.subModules?.find(
          (s: any) => s.key === "ems"
        );
        if (subModule?.url) {
          req.baseURL = subModule.url;
        }
      }
    }
    return req;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // // Clear user data
      // sessionStorage.removeItem("jwtToken");
      // sessionStorage.removeItem("user");
      // Redirect to login
      // window.location.href = "http://localhost:5050";
    }

    // Reject the error so other error handlers can also catch it
    return Promise.reject(error);
  }
);

export const callApi = async (url: string, parameter?: any) => {
  try {
    const response = parameter
      ? await api.post(url, parameter)
      : await api.get(url);
    return response.data;
  } catch (err) {
    throw err;
  }
};

const DataService = ({
  enable,
  url,
  onSuccess,
  onError,
  parameter,
}: DataServiceProps) => {
  const hasExecuted = useRef(false);

  useEffect(() => {
    if (!enable || hasExecuted.current) return;

    const fetchData = async () => {
      try {
        hasExecuted.current = true;
        const response = parameter
          ? await api.post(url, parameter)
          : await api.get(url);
        if (!response.status)
          throw new Error(`HTTP error! Status: ${response.status}`);
        onSuccess(response.data);
      } catch (error) {
        onError(error);
      }
    };

    fetchData();
  }, [enable, url, JSON.stringify(parameter)]);

  return null;
};

export default DataService;
