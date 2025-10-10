import React from "react";
import { Routes, Route } from "react-router-dom";
import Career from "@/pages/career/Career";
import Overview from "@/pages/overview/Overview";
import WelcomePage from "@/pages/welcome-page/WelcomePage";
import Lms from "@/pages/lms/Lms";
import MyTeam from "@/pages/my-team/MyTeam";
import Pay from "@/pages/pay/Pay";
import PersonalInfo from "@/pages/personal-info/PersonalInfo";
import TimeTracking from "@/pages/time-tracking/TimeTracking";

function AppRoutes() {
  return (
    // <div>
    <Routes>
      <Route path="/overview" element={<Overview />} />
      <Route path="/career" element={<Career />} />
      <Route path="/lms" element={<Lms />} />
      <Route path="/pay" element={<Pay />} />
      <Route path="/personal-info" element={<PersonalInfo />} />
      <Route path="/time-tracking" element={<TimeTracking />} />
      <Route path="/my-team" element={<MyTeam />} />
    </Routes>
    // </div>
  );
}

export default AppRoutes;
