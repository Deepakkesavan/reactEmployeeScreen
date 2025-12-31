import { useState } from "react";
import { useNavigate } from "react-router-dom"; // import this
import { Home, Calendar, Clock, Trophy, HelpCircle } from "lucide-react";
import logo from "../../../assets/img/logo2-while-2.png";

function Sidenav() {
  const navItems = [
    {
      label: "Personal Info",
      icon: <Home size={20} />,
      path: "/personal-info",
    },
    {
      label: "Time Off",
      icon: <Calendar size={20} />,
      external: "http://localhost:4200",
    }, // external app
    {
      label: "Timesheet",
      icon: <Clock size={20} />,
      external: "http://localhost:5174",
    }, // external app

    { label: "RRF", icon: <Trophy size={20} />, path: "/rrf" },
    {
      label: "Project Management",
      icon: <HelpCircle size={20} />,
      path: "/project-management",
    },
  ];

  const [activePath, setActivePath] = useState("/personal-info");
  const navigate = useNavigate(); // hook to navigate

  const handleNavClick = (item: (typeof navItems)[0]) => {
    if (item.external) {
      // Open external app
      window.location.href = item.external; // or use window.open(item.external, "_blank")
    } else if (item.path) {
      setActivePath(item.path);
      navigate(item.path);
    }
  };

  return (
    <div className="bg-primary fixed top-0 left-0 h-full w-20 flex flex-col items-center py-6 shadow-lg space-y-4">
      {/* Logo */}
      <div className="mb-12">
        <img src={logo} alt="logo" className="h-6 w-6 object-contain" />
      </div>

      {/* Navigation Items */}
      {navItems.map((item) => (
        <button
          key={item.label}
          onClick={() => handleNavClick(item)}
          className="flex flex-col items-center justify-center transition-all duration-200 cursor-pointer"
        >
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200
              ${
                activePath === item.path
                  ? "bg-primary-content"
                  : "bg-base-100/20"
              }
            `}
          >
            <div
              className={`${
                activePath === item.path
                  ? "text-primary"
                  : "text-primary-content/70"
              }`}
            >
              {item.icon}
            </div>
          </div>
          <span className="text-[10px] text-primary-content mt-1">
            {item.label}
          </span>
        </button>
      ))}

      {/* Logout */}
      <div className="mt-auto">
        <button className="flex flex-col items-center justify-center transition-all duration-200">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-base-100/20 hover:bg-red-600">
            <HelpCircle
              size={20}
              className="text-primary-content/70 hover:text-primary-content"
            />
          </div>
          <span className="text-[10px] text-primary-content mt-1">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
