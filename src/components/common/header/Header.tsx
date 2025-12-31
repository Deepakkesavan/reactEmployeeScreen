import { useState, useEffect, useRef } from "react";
import img from "../../../assets/img/logo2-while-2.png";
import { Bell } from "lucide-react";
import ThemeSwitcher from "../buttons/ThemeSwitcher";
import DataService from "@/common/DataService/DataService";
// import { log } from "console";
// import axios from "axios";

function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [userInitials, setUserInitials] = useState("JD");
  const [enableDataFetch, setEnableDataFetch] = useState(true);
  const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);
  const logoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        logoutRef.current &&
        !logoutRef.current.contains(event.target as Node)
      ) {
        setShowLogoutDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // const handleDataFetchSuccess = (data: any) => {
  //   const result = data.result || data;
  //   const firstName = result.FirstName || result.firstName || "";
  //   const lastName = result.LastName || result.lastName || "";
  //   const initials = `${firstName.charAt(0)}${lastName.charAt(
  //     0
  //   )}`.toUpperCase();
  //   setUserInitials(initials || "JD");
  //   setEnableDataFetch(false);
  // };

  // const handleDataFetchError = () => {
  //   setUserInitials("JD");
  //   setEnableDataFetch(false);
  // };

  // const handleLogout = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8080/api/auth/logout",
  //       {},
  //       { withCredentials: true }
  //     );
  //
  //     window.location.href = "http://10.2.0.4:32553";
  //   } catch (err) {
  //
  //   }

  //   //
  //   window.location.href = "/azure-login";
  //   window.location.href = "http://localhost:5050";
  // };

  return (
    <>
      <DataService
        enable={enableDataFetch}
        url="/Employee/GetEmployeeById"
        parameter={{}}
        onSuccess={(data) => {
          const result = data.result || data;
          const firstName = result.FirstName || result.firstName || "";
          const lastName = result.LastName || result.lastName || "";
          const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
          setUserInitials(initials || "JD");
          setEnableDataFetch(false);
        }}
        onError={() => {
          setUserInitials("JD");
          setEnableDataFetch(false);
        }}
      />

      <header className="bg-primary fixed top-0 left-0 w-full z-50 px-3 py-4 flex justify-between items-center">
        <img src={img} alt="logo" className="h-5 w-33 logo-invert ml-3" />

        <div className="flex items-center gap-4 sm:gap-6 mr-4 sm:mr-8">
          <div className="relative">
            <Bell
              className="text-primary-content cursor-pointer hover:text-primary-content/70 transition"
              size={20}
              onClick={() => setShowNotifications(!showNotifications)}
            />
            {showNotifications && (
              <div className="absolute right-0 top-8 w-72 bg-base-100 rounded-lg shadow-lg border border-base-300 z-50">
                <div className="p-3 border-b border-base-300">
                  <h3 className="font-semibold text-base-content text-sm sm:text-base">
                    Notifications
                  </h3>
                </div>
                <div className="p-3 sm:p-4 text-center">
                  <p className="text-base-content/60 text-sm">
                    No new notifications
                  </p>
                </div>
              </div>
            )}
          </div>

          <ThemeSwitcher />

          <div className="relative" ref={logoutRef}>
            <div
              className="w-8 h-8 rounded-full bg-primary-content/20 flex items-center justify-center cursor-pointer hover:bg-primary-content/30 transition-colors"
              onClick={() => setShowLogoutDropdown(!showLogoutDropdown)}
            >
              {userInitials}
              {/* </span> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
