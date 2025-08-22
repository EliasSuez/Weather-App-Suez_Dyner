import { useEffect, useState } from "react";
import { useWeatherApp } from "./useWeatherApp";
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export function useMultipleCitiesWeather(cities) {
  const { unit } = useWeatherApp();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!cities || cities.length === 0) {
      setData([]);
      return;
    }
    let isMounted = true;
    Promise.all(
      cities.map(city =>
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit === "C" ? "metric" : "imperial"}&appid=${API_KEY}`)
          .then(res => res.json())
      )
    ).then(results => {
      if (isMounted) setData(results);
    });
    return () => { isMounted = false; };
  }, [cities, unit]);

  return data;
}