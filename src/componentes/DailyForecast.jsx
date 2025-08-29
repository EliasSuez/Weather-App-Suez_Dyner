import { useWeatherApp } from "../hooks/useWeatherApp";
import { celsiusToFahrenheit } from "../util/temperature";

export default function DailyForecast({ forecast, unit }) {
  const { theme } = useWeatherApp();
  const simbolo = unit === "C" ? "°C" : "°F";
  const themeClass = theme === "dark" ? "theme-dark" : "theme-light";

  return (
    <div className={`daily-forecast-box ${themeClass}`}>
      <style>
        {`
        .daily-forecast-box {
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-radius: 18px;
          padding: 18px 26px;
          margin-bottom: 12px;
        }
        .day-box {
          border-radius: 10px;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.13rem;
        }
        /* Tema oscuro */
        .theme-dark.daily-forecast-box {
          background: rgba(30,32,56,0.97);
          color: #fff;
        }
        .theme-dark .day-box {
          background: #23254e;
          color: #e4e6fa;
        }
        /* Tema claro */
        .theme-light.daily-forecast-box {
          background: #f5f5fa;
          color: #22243d;
        }
        .theme-light .day-box {
          background: #ededed;
          color: #22243d;
        }
        `}
      </style>
      {forecast.map((d, i) => {
        const tempMin = unit === "C" ? Math.round(d.temp_min) : Math.round(celsiusToFahrenheit(d.temp_min));
        const tempMax = unit === "C" ? Math.round(d.temp_max) : Math.round(celsiusToFahrenheit(d.temp_max));
        return (
          <div key={i} className="day-box">
            <span>{d.day}</span>
            <span>{tempMin}{simbolo} / {tempMax}{simbolo}</span>
            <span>{d.status}</span>
          </div>
        );
      })}
    </div>
  );
}