import { useWeatherApp } from "../hooks/useWeatherApp";
import { celsiusToFahrenheit } from "../util/temperature";

export default function CityWeather({ cities, unit }) {
  const { theme } = useWeatherApp();
  const simbolo = unit === "C" ? "°C" : "°F";

  const themeClass = theme === "dark" ? "theme-dark" : "theme-light";

  return (
    <div className={`city-weather-box ${themeClass}`}>
      <style>
        {`
        .city-weather-box {
          margin-top: 10px;
          border-radius: 18px;
          padding: 18px 26px;
          margin-bottom: 12px;
        }
        .city-title {
          font-weight: 700;
          font-size: 1.2rem;
          margin-bottom: 8px;
        }
        .city-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .city-box {
          border-radius: 12px;
          padding: 10px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.05rem;
        }
        .city-name {
          font-weight: 600;
        }
        .city-country {
          margin-left: 4px;
        }
        .city-temp {
          font-size: 1.25rem;
          font-weight: bold;
        }
        /* --- Tema oscuro --- */
        .theme-dark.city-weather-box {
          background: rgba(30,32,56,0.97);
          color: #fff;
        }
        .theme-dark .city-title {
          color: #fff;
        }
        .theme-dark .city-box {
          background: #23254e;
          color: #e4e6fa;
        }
        .theme-dark .city-name {
          color: #fff;
        }
        .theme-dark .city-country {
          color: #b4b4e6;
        }
        .theme-dark .city-temp {
          color: #f6d365;
        }
        /* --- Tema claro --- */
        .theme-light.city-weather-box {
          background: #f5f5fa;
          color: #22243d;
        }
        .theme-light .city-title {
          color: #22243d;
        }
        .theme-light .city-box {
          background: #ededed;
          color: #22243d;
        }
        .theme-light .city-name {
          color: #22243d;
        }
        .theme-light .city-country {
          color: #8551e6;
        }
        .theme-light .city-temp {
          color: #ff884b;
        }
        `}
      </style>
      <div className="city-title">Other large cities</div>
      <div className="city-list">
        {cities.map((c, i) => {
          const temp = unit === "C" ? Math.round(c.temp) : Math.round(celsiusToFahrenheit(c.temp));
          return (
            <div key={i} className="city-box">
              <span>
                <span className="city-name">{c.city}</span>
                <span className="city-country"> {c.country}</span>
              </span>
              <span>{c.status}</span>
              <span className="city-temp">{temp}{simbolo}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}