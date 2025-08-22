import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;


export function useWeatherApi(city, type, lang = "es") {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    setLoading(true);
    setError(null);

    fetch(
      `https://api.openweathermap.org/data/2.5/${type}?q=${city}&appid=${API_KEY}&units=metric&lang=${lang}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(`API result for ${city} ${type} :`, json);
        // Aquí verifica el código
        if (String(json.cod) === "200") {
          setData(json);
          setError(null);
        } else {
          setData(null);
          setError(json.message || "No se pudo conectar con la API");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("No se pudo conectar con la API");
        setData(null);
        setLoading(false);
      });
  }, [city, type, lang]);

  return { data, loading, error };
}