import axios from "axios";
import { useEffect, useRef } from "react";
import { type DataServiceProps } from "@/common/DataService/interface/DataServiceInterface";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // // Clear user data
      // localStorage.removeItem("jwtToken");
      // localStorage.removeItem("user");
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
