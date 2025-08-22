import { celsiusToFahrenheit } from "../util/temperature";

export default function CurrentWeather({ weather, unit }) {
  // Si el unit es "C", muestra el valor en Celsius, si es "F", lo convierte.
  const temp = unit === "C" ? Math.round(weather.temp) : celsiusToFahrenheit(weather.temp);
  const tempMin = unit === "C" ? Math.round(weather.temp_min) : celsiusToFahrenheit(weather.temp_min);
  const tempMax = unit === "C" ? Math.round(weather.temp_max) : celsiusToFahrenheit(weather.temp_max);
  const feelsLike = unit === "C" ? Math.round(weather.feels_like) : celsiusToFahrenheit(weather.feels_like);

  // El símbolo de unidad para mostrar siempre °C o °F
  const unidadSimbolo = unit === "C" ? "°C" : "°F";

  return (
    <div className="current-weather-box">
      <style>
        {`
        body {
          background: linear-gradient(135deg, #23254e 0%, #2d2347 100%);
          color: #fff;
          margin: 0;
          min-height: 100vh;
        }

        .current-weather-box {
          background: rgba(30,32,56,0.97);
          border-radius: 18px;
          padding: 24px 32px;
          margin-bottom: 10px;
          color: #fff;
          box-shadow: 0 2px 12px #0003;
        }
        .current-weather-main {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .current-temp {
          font-size: 3.8rem;
          font-weight: bold;
          color: #f6d365;
        }
        .current-city {
          font-size: 1.3rem;
          font-weight: 500;
          color: #e4e6fa;
        }
        .current-time {
          font-size: 1.08rem;
          color: #b4b4e6;
          margin-bottom: 8px;
        }
        .current-details {
          margin-top: 14px;
          display: flex;
          gap: 24px;
          font-size: 1.08rem;
          color: #e4e6fa;
        }
        `}
      </style>
      <div className="current-weather-main">
        <span className="current-temp">{temp}{unidadSimbolo}</span>
        <span>
          <div className="current-city">{weather.city}</div>
          <div className="current-time">{weather.time}</div>
        </span>
      </div>
      <div className="current-details">
        <span>{weather.status}</span>
        <span>{weather.wind} m/s</span>
        <span>Sensación térmica: {feelsLike}{unidadSimbolo}</span>
        <span>Min/Max: {tempMin}{unidadSimbolo} / {tempMax}{unidadSimbolo}</span>
      </div>
    </div>
  );
}