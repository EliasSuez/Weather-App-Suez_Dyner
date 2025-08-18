export default function CurrentWeather({ weatherData }) {
    if (!weatherData || weatherData.cod === "404") return <div>No se encontró el clima.</div>;
    const { name, main, weather, wind, dt } = weatherData;
    const date = new Date(dt * 1000);
    return (
      <section>
        <h2>Clima actual</h2>
        <h3>{name}</h3>
        <p>{date.toLocaleString()}</p>
        <p>{weather[0].description}</p>
        <p>Temp: {main.temp}°</p>
        <p>Min: {main.temp_min}° / Max: {main.temp_max}°</p>
        <p>Viento: {wind.speed} km/h</p>
      </section>
    );
  }