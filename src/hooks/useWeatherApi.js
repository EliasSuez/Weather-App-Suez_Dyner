import { useEffect, useState } from "react";
import { useWeatherApp } from "./useWeatherApp";
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export function useWeatherApi(city) {
  const { unit, lastWeather, saveWeather } = useWeatherApp();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!city) return;
    if (
      lastWeather &&
      lastWeather.city === city &&
      lastWeather.unit === unit &&
      lastWeather.type === "forecast"
    ) {
      setData(lastWeather.data);
      return;
    }
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit === "C" ? "metric" : "imperial"}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        saveWeather({
          city,
          unit,
          type: "forecast",
          data: result,
        });
      })
      .catch(() => setData(null));
  }, [city, unit, lastWeather, saveWeather]);
  return data;
}