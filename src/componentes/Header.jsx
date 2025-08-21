import { useWeatherApp } from "../hooks/useWeatherApp";

export default function Header() {
  const context = useWeatherApp();
  if (!context) return <div>Error: WeatherAppProvider missing</div>;
  const { theme, toggleTheme, unit, toggleUnit } = context;

  return (
    <header>
      <input className="search-bar" placeholder="Search city..." />
      <div className="unit-toggle">
        <button
          className={`unit-btn${unit === "C" ? " active" : ""}`}
          onClick={toggleUnit}
        >
          °C
        </button>
        <button
          className={`unit-btn${unit === "F" ? " active" : ""}`}
          onClick={toggleUnit}
        >
          °F
        </button>
      </div>
      <button onClick={toggleTheme} style={{ marginLeft: "16px" }}>
        {theme === "dark" ? "🌙 Oscuro" : "☀️ Claro"}
      </button>
    </header>
  );
}