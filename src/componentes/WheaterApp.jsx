import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TemperatureUnitContext } from "../context/TemperatureUnitContext";
import { LastWeatherContext } from "../context/LastWeatherContext";
import { useWeatherApi, useCurrentWeather } from "../hooks/useWeatherApi";
import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import CityWeather from "./CityWeather";

const DEFAULT_CITY = "Buenos Aires";

export default function WeatherApp() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { unit, setUnit } = useContext(TemperatureUnitContext);
  const { lastWeather, setLastWeather } = useContext(LastWeatherContext);

  // OpenWeather units: "metric" = C, "imperial" = F
  const apiUnit = unit === "C" ? "metric" : "imperial";

  const [selectedCity, setSelectedCity] = useState(DEFAULT_CITY);
  const [searchQuery, setSearchQuery] = useState("");

  // Siempre llama los hooks, nunca condicionalmente
  const currentWeatherApi = useCurrentWeather(selectedCity, apiUnit);
  const forecastApi = useWeatherApi(selectedCity, apiUnit);

  // Elige qué mostrar según si hay dato guardado
  const currentWeather =
    lastWeather[selectedCity]?.current || currentWeatherApi;
  const forecast =
    lastWeather[selectedCity]?.forecast || forecastApi;

  // Almacenar el último clima consultado con useEffect para evitar loops
  useEffect(() => {
    if (
      currentWeather &&
      forecast &&
      (
        !lastWeather[selectedCity] ||
        lastWeather[selectedCity].unit !== apiUnit
      )
    ) {
      setLastWeather({
        ...lastWeather,
        [selectedCity]: { current: currentWeather, forecast, unit: apiUnit },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWeather, forecast, apiUnit, selectedCity]);

  function handleSearch(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSelectedCity(searchQuery.trim());
      setSearchQuery("");
    }
  }

  return (
    <div className={`weather-app ${theme}`}>
      <header>
        <h1>Weather App</h1>
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <div>
          <button onClick={() => setUnit("C")}>°C</button>
          <button onClick={() => setUnit("F")}>°F</button>
        </div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar ciudad..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <CurrentWeather weatherData={currentWeather} />
        <HourlyForecast forecastData={forecast} />
        <DailyForecast forecastData={forecast} />
        <CityWeather unit={apiUnit} />
      </main>
      <footer>
        <p>
          Challenge by <a href="https://devchallenges.io/">DevChallenges.io</a>
        </p>
      </footer>
    </div>
  );
}