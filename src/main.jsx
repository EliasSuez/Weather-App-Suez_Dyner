import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { TemperatureUnitProvider } from "./context/TemperatureUnitContext";
import { LastWeatherProvider } from "./context/LastWeatherContext";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <TemperatureUnitProvider>
        <LastWeatherProvider>
          <App />
        </LastWeatherProvider>
      </TemperatureUnitProvider>
    </ThemeProvider>
  </React.StrictMode>
);