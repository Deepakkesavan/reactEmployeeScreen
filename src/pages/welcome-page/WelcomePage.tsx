import React from "react";
import Header from "../../components/common/header/Header";
import WelcomeBanner from "@/components/common/welcome-banner/WelcomeBanner";
import QuickActions from "@/components/common/quick-actions/QuickActions";
import AppRoutes from "@/components/routes/AppRoutes";
import TabsNav from "@/components/common/tabs/TabsNav";
function WelcomePage() {
  return (
    <div>
      <Header />
      <div className="container mt-16 px-4 py-3 ml-3 space-y-6 ">
        <WelcomeBanner />
        <QuickActions />
        <TabsNav />
        <AppRoutes />
      </div>
    </div>
  );
}

export default WelcomePage;
