import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export function useWeatherApi(city, unit = "metric") {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!city) return;
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData(null));
  }, [city, unit]);
  return data;
}

export function useCurrentWeather(city, unit = "metric") {
  const [current, setCurrent] = useState(null);
  useEffect(() => {
    if (!city) return;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then(setCurrent)
      .catch(() => setCurrent(null));
  }, [city, unit]);
  return current;
}