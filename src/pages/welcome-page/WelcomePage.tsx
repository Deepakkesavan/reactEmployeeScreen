import AppRoutes from "@/components/routes/AppRoutes";
// import TabsNav from "@/components/common/tabs/TabsNav";

function WelcomePage() {
  return (
    <div className="h-screen flex flex-col">
      {/* <Header /> */}
      {/* <div className="flex-none">
        <div className="flex m-6 mt-0 overflow-x-auto no-scrollbar sticky">
          <TabsNav />
        </div>
      </div> 
      <p>Testing purpose</p>
      */}

      <div className="flex-1 overflow-y-auto px-6 pb-30 no-scrollbar">
        <AppRoutes />
      </div>
    </div>
  );
}

export default WelcomePage;
