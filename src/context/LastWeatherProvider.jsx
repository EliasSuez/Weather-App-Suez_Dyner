import { useState } from "react";
import { LastWeatherContext } from "./LastWeatherContext";

export function LastWeatherProvider({ children }) {
  const [lastWeather, setLastWeather] = useState({});
  return (
    <LastWeatherContext.Provider value={{ lastWeather, setLastWeather }}>
      {children}
    </LastWeatherContext.Provider>
  );
}