export default function DailyForecast({ forecast }) {
  return (
    <div className="daily-forecast-box">
      <style>
        {`
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
      {forecast.map((d, i) => (
        <div key={i} className="day-box">
          <span>{d.day}</span>
          <span>{d.temp_min}° / {d.temp_max}°</span>
          <span>{d.status}</span>
        </div>
      ))}
    </div>
  );
}