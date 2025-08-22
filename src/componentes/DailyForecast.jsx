import { celsiusToFahrenheit } from "../util/temperature";
import { useWeatherApp } from "../hooks/useWeatherApp";

export default function DailyForecast({ forecast }) {
  const { unit } = useWeatherApp();

  return (
    <div className="daily-forecast-box">
      <style>
        {`
        body {
          background: linear-gradient(135deg, #23254e 0%, #2d2347 100%);
          color: #fff;
          margin: 0;
          min-height: 100vh;
        }
        
        .daily-forecast-box {
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: rgba(30,32,56,0.97);
          border-radius: 18px;
          padding: 18px 26px;
          margin-bottom: 12px;
          color: #fff;
        }
        .day-box {
          background: #23254e;
          border-radius: 10px;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.13rem;
          color: #e4e6fa;
        }
        `}
      </style>
      {forecast.map((d, i) => {
        const tempMin = unit === "C" ? d.temp_min : celsiusToFahrenheit(d.temp_min);
        const tempMax = unit === "C" ? d.temp_max : celsiusToFahrenheit(d.temp_max);
        return (
          <div key={i} className="day-box">
            <span>{d.day}</span>
            <span>{tempMin}° / {tempMax}°{unit}</span>
            <span>{d.status}</span>
          </div>
        );
      })}
    </div>
  );
}