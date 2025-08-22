import { celsiusToFahrenheit } from "../util/temperature";

export default function HourlyForecast({ forecast, unit }) {
  const simbolo = unit === "C" ? "°C" : "°F";
  return (
    <div className="hourly-forecast-box">
      <style>
        {`
        .hourly-forecast-box {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          background: rgba(30,32,56,0.97);
          border-radius: 18px;
          padding: 14px 18px;
          color: #fff;
        }
        .hour-box {
          background: #23254e;
          border-radius: 10px;
          padding: 10px 8px;
          min-width: 80px;
          text-align: center;
          color: #e4e6fa;
          font-size: 1.1rem;
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