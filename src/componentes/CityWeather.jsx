export default function CityWeather({ cities }) {
  return (
    <div className="city-weather-box">
      <style>
        {`
        .city-weather-box {
          margin-top: 10px;
          background: rgba(30,32,56,0.97);
          border-radius: 18px;
          padding: 18px 26px;
          margin-bottom: 12px;
          color: #fff;
        }
        .city-title {
          font-weight: 700;
          color: #fff;
          font-size: 1.2rem;
          margin-bottom: 8px;
        }
        .city-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .city-box {
          background: #23254e;
          border-radius: 12px;
          padding: 10px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.05rem;
          color: #e4e6fa;
        }
        .city-name {
          font-weight: 600;
          color: #fff;
        }
        .city-country {
          color: #b4b4e6;
        }
        .city-temp {
          font-size: 1.25rem;
          font-weight: bold;
          color: #f6d365;
        }
        `}
      </style>
      <div className="city-title">Other large cities</div>
      <div className="city-list">
        {cities.map((c, i) => (
          <div key={i} className="city-box">
            <span>
              <span className="city-name">{c.city}</span>
              <span className="city-country"> {c.country}</span>
            </span>
            <span>{c.status}</span>
            <span className="city-temp">{c.temp}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}