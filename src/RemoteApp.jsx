import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const RemoteApp = () => (
  <div id="ems-root">
    <StrictMode>
      <BrowserRouter basename="ems">
        <App />
      </BrowserRouter>
    </StrictMode>
  </div>
);

export default RemoteApp;
