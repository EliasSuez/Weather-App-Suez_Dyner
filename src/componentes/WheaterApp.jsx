import { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import CityWeather from "./CityWeather";
import Header from "./Header";
import { useWeatherApi } from "../hooks/useWeatherApi";
import { useMultipleCitiesWeather } from "../hooks/useMultipleCitiesWeather";
import { useWeatherApp } from "../hooks/useWeatherApp";

const DEFAULT_CITY = "Helsinki";
const OTHER_CITIES = ["New York", "Copenhagen", "Ho Chi Minh City"];

// Recibe unit y setUnit por props (NO uses useState para unit aquí)
export default function WheaterApp({ unit, setUnit }) {
  const [city, setCity] = useState(DEFAULT_CITY);
  const { theme } = useWeatherApp();
  const themeClass = theme === "dark" ? "theme-dark" : "theme-light";

  // Usar el hook con lenguaje español
  const {
    data: currentData,
    loading: loadingCurrent,
    error: errorCurrent,
  } = useWeatherApi(city, "weather", "es");

  const {
    data: forecastData,
    loading: loadingForecast,
    error: errorForecast,
  } = useWeatherApi(city, "forecast", "es");

  const otherCitiesData = useMultipleCitiesWeather(OTHER_CITIES);

  // Procesar datos para CurrentWeather
  let currentWeather = null;
  if (currentData && currentData.main && String(currentData.cod) === "200") {
    currentWeather = {
      city: currentData.name,
      country: currentData.sys?.country,
      temp: currentData.main.temp,
      feels_like: currentData.main.feels_like,
      status: currentData.weather[0].main,
      wind: currentData.wind.speed,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      temp_min: currentData.main.temp_min,
      temp_max: currentData.main.temp_max,
      icon: currentData.weather[0].icon,
      description: currentData.weather[0].description,
    };
  }

  // Procesar datos para HourlyForecast (primeras 8 entradas = 24h)
  const hourlyForecast = forecastData && forecastData.list
    ? forecastData.list.slice(0, 8).map(item => ({
        hour: new Date(item.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        temp: item.main.temp,
        status: item.weather[0].main,
        icon: item.weather[0].icon,
        description: item.weather[0].description,
      }))
    : [];

  // Procesar datos para DailyForecast (agrupando por día)
  const dailyMap = {};
  if (forecastData && forecastData.list) {
    forecastData.list.forEach(item => {
      const date = new Date(item.dt * 1000);
      const day = date.toLocaleDateString([], { weekday: "short" });
      if (!dailyMap[day]) {
        dailyMap[day] = {
          day,
          temp_min: item.main.temp_min,
          temp_max: item.main.temp_max,
          status: item.weather[0].main,
          icon: item.weather[0].icon,
          description: item.weather[0].description,
        };
      } else {
        dailyMap[day].temp_min = Math.min(dailyMap[day].temp_min, item.main.temp_min);
        dailyMap[day].temp_max = Math.max(dailyMap[day].temp_max, item.main.temp_max);
      }
    });
  }
  const dailyForecast = Object.values(dailyMap).slice(0, 5);

  // Procesar datos para CityWeather
  const cityWeatherList = otherCitiesData
    .filter(data => data && data.main)
    .map(data => ({
      city: data.name,
      country: data.sys.country,
      temp: data.main.temp,
      status: data.weather[0].main,
      icon: data.weather[0].icon,
      description: data.weather[0].description,
    }));

  return (
    <div className={`weather-app-container ${themeClass}`}>
      <style>
        {`
        .weather-app-container {
          border-radius: 22px;
          padding: 20px 24px;
          margin: 0 auto;
          max-width: 1520px;
          box-sizing: border-box;
          box-shadow: 0 2px 12px #0003;
        }
        /* Tema oscuro */
        .theme-dark.weather-app-container {
          background: rgba(30,32,56,0.97);
          color: #fff;
        }
        /* Tema claro */
        .theme-light.weather-app-container {
          background: #f5f5fa;
          color: #22243d;
        }
        `}
      </style>
      <Header setCity={setCity} unit={unit} setUnit={setUnit} />
      <main>
        <section>
          {loadingCurrent && <div>Loading...</div>}
          {errorCurrent && <div style={{color: "orange"}}>{errorCurrent}</div>}
          {currentWeather && <CurrentWeather weather={currentWeather} unit={unit} />}
        </section>
        <section>
          {loadingForecast && <div>Loading...</div>}
          {errorForecast && <div style={{color: "orange"}}>{errorForecast}</div>}
          <HourlyForecast forecast={hourlyForecast} unit={unit} />
        </section>
        <section>
          <DailyForecast forecast={dailyForecast} unit={unit} />
        </section>
        <aside>
          <CityWeather cities={cityWeatherList} unit={unit} />
        </aside>
      </main>
    </div>
  );
}