import WelcomePage from "./pages/welcome-page/WelcomePage";
import { EmployeeProvider } from "./contexts/EmployeeContext";

function App() {
  return (
    <EmployeeProvider>
      <div>
        <WelcomePage />
      </div>
    </EmployeeProvider>
  );
}

export default App;
