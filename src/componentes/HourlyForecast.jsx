export default function HourlyForecast({ forecastData }) {
    if (!forecastData || !forecastData.list) return null;
    return (
      <section>
        <h2>Próximas 24h</h2>
        <div style={{ display: "flex", gap: "10px", overflowX: "auto" }}>
          {forecastData.list.slice(0, 8).map((item) => (
            <div key={item.dt} style={{ minWidth: "80px" }}>
              <p>
                {new Date(item.dt * 1000).getHours()}:00
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
                width={50}
              />
              <p>{item.main.temp}°</p>
            </div>
          ))}
        </div>
      </section>
    );
  }