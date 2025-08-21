export default function HourlyForecast({ forecast }) {
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
      {forecast.map((h, i) => (
        <div key={i} className="hour-box">
          <div>{h.hour}</div>
          <div>{h.temp}°</div>
          <div>{h.status}</div>
        </div>
      ))}
    </div>
  );
}