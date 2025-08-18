export default function DailyForecast({ forecastData }) {
    if (!forecastData || !forecastData.list) return null;
  
    // Agrupa por día
    const days = Array(5)
      .fill(0)
      .map((_, i) => {
        const dayList = forecastData.list.filter(
          (item) =>
            new Date(item.dt * 1000).getDate() ===
            new Date(Date.now() + i * 24 * 3600 * 1000).getDate()
        );
        if (!dayList.length) return null;
        const temps = dayList.map((i) => i.main.temp);
        return {
          date: new Date(dayList[0].dt * 1000),
          min: Math.min(...temps),
          max: Math.max(...temps),
          status: dayList[0].weather[0].description,
          icon: dayList[0].weather[0].icon,
        };
      });
  
    return (
      <section>
        <h2>Próximos 5 días</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          {days.map(
            (day, i) =>
              day && (
                <div key={i} style={{ minWidth: "100px" }}>
                  <p>{day.date.toLocaleDateString("es-ES", { weekday: "short" })}</p>
                  <img
                    src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                    alt={day.status}
                    width={50}
                  />
                  <p>{day.status}</p>
                  <p>
                    {day.min}° / {day.max}°
                  </p>
                </div>
              )
          )}
        </div>
      </section>
    );
  }