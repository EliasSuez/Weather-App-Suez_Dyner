import { useState, useMemo } from "react";
import { WeatherAppContext } from "./WeatherAppContext";

export function WeatherAppProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const [unit, setUnit] = useState("C");
  const toggleUnit = () => setUnit((prev) => (prev === "C" ? "F" : "C"));

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      unit,
      setUnit,
      toggleUnit
    }),
    [theme, unit]
  );

  return (
    <WeatherAppContext.Provider value={value}>
      {children}
    </WeatherAppContext.Provider>
  );
}