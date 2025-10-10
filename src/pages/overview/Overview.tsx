import React from "react";
import DashboardCards from "../dashboard-cards/DashboardCards";

function Overview() {
  return (
    <div>
      <h1 className="p-4 text-4xl font-bold text-black dark:text-white">
        Services & Tools
      </h1>
      <div className="r-10">
        <DashboardCards />
      </div>
    </div>
  );
}

export default Overview;
