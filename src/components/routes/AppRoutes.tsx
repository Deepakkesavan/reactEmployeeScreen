import { Routes, Route, Navigate } from "react-router-dom";
import Goals from "@/pages/goals/Goals";
import MyTeam from "@/pages/my-team/MyTeam";
// import Pay from "@/pages/pay/Pay";
import PersonalInfo from "@/pages/personal-info/PersonalInfo";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/personal-info" />} />
      {/* <Route path="/overview" element={<Overview />} /> */}
      <Route path="/goals" element={<Goals />} />
      {/* <Route path="/pay" element={<Pay />} /> */}
      <Route path="/personal-info" element={<PersonalInfo />} />
      <Route path="/my-team" element={<MyTeam />} />
    </Routes>
  );
}

export default AppRoutes;
