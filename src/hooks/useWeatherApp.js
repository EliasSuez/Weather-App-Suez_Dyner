import { useContext } from "react";
import { WeatherAppContext } from "../context/WeatherAppContext";

export function useWeatherApp() {
  return useContext(WeatherAppContext);
}