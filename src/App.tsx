import WelcomePage from "./pages/welcome-page/WelcomePage";
import { EmployeeProvider } from "./contexts/EmployeeContext";

function App() {
  return (
    <EmployeeProvider>
      <div id="ems-root">
        <WelcomePage />
      </div>
    </EmployeeProvider>
  );
}

export default App;
