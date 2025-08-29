import { useWeatherApp } from "../hooks/useWeatherApp";
import { celsiusToFahrenheit } from "../util/temperature";

export default function HourlyForecast({ forecast, unit }) {
  const { theme } = useWeatherApp();
  const simbolo = unit === "C" ? "°C" : "°F";
  const themeClass = theme === "dark" ? "theme-dark" : "theme-light";

  return (
    <div className={`hourly-forecast-box ${themeClass}`}>
      <style>
        {`
        .hourly-forecast-box {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          border-radius: 18px;
          padding: 14px 18px;
        }
        .hour-box {
          border-radius: 10px;
          padding: 10px 8px;
          min-width: 80px;
          text-align: center;
          font-size: 1.1rem;
        }
        /* Tema oscuro */
        .theme-dark.hourly-forecast-box {
          background: rgba(30,32,56,0.97);
          color: #fff;
        }
        .theme-dark .hour-box {
          background: #23254e;
          color: #e4e6fa;
        }
        /* Tema claro */
        .theme-light.hourly-forecast-box {
          background: #f5f5fa;
          color: #22243d;
        }
        .theme-light .hour-box {
          background: #ededed;
          color: #22243d;
        }
        `}
      </style>
      {forecast.map((h, i) => {
        const temp = unit === "C" ? Math.round(h.temp) : Math.round(celsiusToFahrenheit(h.temp));
        return (
          <div key={i} className="hour-box">
            <div>{h.hour}</div>
            <div>{temp}{simbolo}</div>
            <div>{h.status}</div>
          </div>
        );
      })}
    </div>
  );
}