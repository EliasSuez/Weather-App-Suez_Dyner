import { useWeatherApp } from "../hooks/useWeatherApp";
import { celsiusToFahrenheit } from "../util/temperature";

export default function CurrentWeather({ weather, unit }) {
  const { theme } = useWeatherApp();

  const temp = unit === "C" ? Math.round(weather.temp) : celsiusToFahrenheit(weather.temp);
  const tempMin = unit === "C" ? Math.round(weather.temp_min) : celsiusToFahrenheit(weather.temp_min);
  const tempMax = unit === "C" ? Math.round(weather.temp_max) : celsiusToFahrenheit(weather.temp_max);
  const feelsLike = unit === "C" ? Math.round(weather.feels_like) : celsiusToFahrenheit(weather.feels_like);

  const unidadSimbolo = unit === "C" ? "°C" : "°F";
  const themeClass = theme === "dark" ? "theme-dark" : "theme-light";

  return (
    <div className={`current-weather-box ${themeClass}`}>
      <style>
        {`
        .current-weather-box {
          border-radius: 18px;
          padding: 24px 32px;
          margin-bottom: 10px;
          box-shadow: 0 2px 12px #0003;
          max-width: 1520px;
        }
        .current-weather-main {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .current-temp {
          font-size: 3.8rem;
          font-weight: bold;
        }
        .current-city {
          font-size: 1.3rem;
          font-weight: 500;
        }
        .current-time {
          font-size: 1.08rem;
          margin-bottom: 8px;
        }
        .current-details {
          margin-top: 14px;
          display: flex;
          gap: 24px;
          font-size: 1.08rem;
        }
        /* --- Tema oscuro --- */
        .theme-dark.current-weather-box {
          background: rgba(30,32,56,0.97);
          color: #fff;
        }
        .theme-dark .current-temp {
          color: #f6d365;
        }
        .theme-dark .current-city {
          color: #e4e6fa;
        }
        .theme-dark .current-time {
          color: #b4b4e6;
        }
        .theme-dark .current-details {
          color: #e4e6fa;
        }
        /* --- Tema claro --- */
        .theme-light.current-weather-box {
          background: #f5f5fa;
          color: #22243d;
        }
        .theme-light .current-temp {
          color: #ff884b;
        }
        .theme-light .current-city {
          color: #22243d;
        }
        .theme-light .current-time {
          color: #8551e6;
        }
        .theme-light .current-details {
          color: #22243d;
        }
        `}
      </style>
      <div className="current-weather-main">
        <span className="current-temp">{temp}{unidadSimbolo}</span>
        <span>
          <div className="current-city">{weather.city}</div>
          <div className="current-time">{weather.time}</div>
        </span>
      </div>
      <div className="current-details">
        <span>{weather.status}</span>
        <span>{weather.wind} m/s</span>
        <span>Sensación térmica: {feelsLike}{unidadSimbolo}</span>
        <span>Min/Max: {tempMin}{unidadSimbolo} / {tempMax}{unidadSimbolo}</span>
      </div>
    </div>
  );
}