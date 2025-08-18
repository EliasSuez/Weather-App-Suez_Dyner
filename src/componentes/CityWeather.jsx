import { useEffect, useState } from "react";
import { useCurrentWeather } from "../hooks/useWeatherApi";

const CITIES = ["New York", "Copenhagen", "Ho Chi Minh"];

export default function CityWeather({ unit }) {
  // Creamos un estado para cada ciudad
  const [cityWeather, setCityWeather] = useState(Array(CITIES.length).fill(null));

  useEffect(() => {
    // Para cada ciudad, llamamos el hook y actualizamos el estado
    CITIES.forEach((city, idx) => {
      // Usamos el hook fuera del render
      // ¡Pero aquí no podemos usar hooks! Así que usamos fetch manual
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCityWeather((prev) => {
            const updated = [...prev];
            updated[idx] = data;
            return updated;
          });
        })
        .catch(() => {
          setCityWeather((prev) => {
            const updated = [...prev];
            updated[idx] = null;
            return updated;
          });
        });
    });
  }, [unit]);

  return (
    <section>
      <h2>Clima en ciudades grandes</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {CITIES.map((city, idx) => {
          const data = cityWeather[idx];
          if (!data || data.cod === "404") return <div key={city}>{city}: no data</div>;
          return (
            <div key={city}>
              <h3>{city}</h3>
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt={data.weather[0].description}
                width={40}
              />
              <p>{data.main.temp}°</p>
              <p>{data.weather[0].description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}