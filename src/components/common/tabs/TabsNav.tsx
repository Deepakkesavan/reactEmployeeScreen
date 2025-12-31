import { NavLink } from "react-router-dom";
import { type Tab } from "./interfaces/TabsNav.interface";

function TabsNav() {
  // const location = useLocation();

  const tabs: Tab[] = [
    { name: "Personal Info", path: "/personal-info" },
    // { name: "Pay", path: "/pay" },
    { name: "My Team", path: "/my-team" },
    { name: "Goals", path: "/goals" },
  ];

  return (
    <div className="tabs tabs-boxed bg-base-100 border-b border-base-300   py-2 overflow-x-auto">
      {tabs.map((tab) => {
        // const isActive = location.pathname === tab.path;

        return (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              `tab tab-sm md:tab-md whitespace-nowrap ${
                isActive ? "tab-active" : ""
              }`
            }
          >
            {tab.name}
          </NavLink>
        );
      })}
    </div>
  );
}

export default TabsNav;
