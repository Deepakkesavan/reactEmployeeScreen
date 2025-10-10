import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function TabsNav() {
  const tabs = [
    { name: "Overview", path: "/overview" },
    { name: "Personal Info", path: "/personal-info" },
    { name: "Pay", path: "/pay" },
    { name: "LMS", path: "/lms" },
    { name: "Time Tracking", path: "/time-tracking" },
    { name: "My Team", path: "/my-team" },
    { name: "Career", path: "/career" },
  ];

  return (
    <nav className="flex space-x-8 border-b border-gray-200 bg-white dark:bg-black px-8 py-2">
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) =>
            `pb-2 text-sm font-medium transition-colors duration-200 ${
              isActive
                ? "text-black border-b-2 border-blue-500"
                : "text-gray-500 hover:text-blue-600"
            }`
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default TabsNav;
