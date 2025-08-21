import { useState, useMemo } from "react";
import { WeatherAppContext } from "./WeatherAppContext";

export function WeatherAppProvider({ children }) {
  const [theme, setTheme] = useState("dark"); // "dark" o "light"
  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme]
  );

  return (
    <WeatherAppContext.Provider value={value}>
      {children}
    </WeatherAppContext.Provider>
  );
}