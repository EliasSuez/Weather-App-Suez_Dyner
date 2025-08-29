import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useWeatherApp } from "./hooks/useWeatherApp";
import WheaterApp from "./componentes/WheaterApp";
import CityWeather from "./componentes/CityWeather";
import CurrentWeather from "./componentes/CurrentWeather";
import HourlyForecast from "./componentes/HourlyForecast";
import DailyForecast from "./componentes/DailyForecast";
import './App.css';

export default function App() {
  const { theme, toggleTheme, unit, setUnit } = useWeatherApp();
  if (!unit || !setUnit) return <div>Error: WeatherAppProvider missing or incomplete</div>;

  const appStyles = {
    background: theme === "dark"
      ? "none"
      : "linear-gradient(135deg, #f5f5fa 0%, #e7e6ec 100%)",
    color: theme === "dark" ? "#fff" : "#22243d",
    minHeight: "100vh",
    transition: "background 0.3s, color 0.3s",
    padding: "0 0 40px 0",
    position: "relative",
    overflow: "hidden",
  };

  const navStyles = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: theme === "dark" ? "#191c36" : "#ededed",
    color: theme === "dark" ? "#fff" : "#22243d",
    padding: "12px 28px",
    marginBottom: "12px",
    borderRadius: "0 0 12px 12px",
    boxShadow: theme === "dark" ? "0 2px 8px #0002" : "0 2px 8px #ccc3"
  };

  const linkStyle = {
    color: theme === "dark" ? "#fff" : "#22243d",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "4px 12px",
    borderRadius: "6px",
    transition: "background .2s",
  };

  return (
    <div style={appStyles}>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
        body, .weather-app-container, * {
          font-family: 'Montserrat', Arial, sans-serif !important;
        }
        .unit-btn {
          background: #191c36;
          color: #fff;
          border: none;
          border-radius: 50%;
          width: 38px;
          height: 38px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background .2s;
          outline: none;
        }
        .unit-btn.active {
          background: #8551e6;
          color: #fff;
        }
        .unit-toggle {
          display: flex;
          gap: 4px;
        }

        /* Fondo animado de estrellas para tema oscuro */
        .star-background {
          position: fixed;
          inset: 0;
          z-index: 0;
          width: 100vw;
          height: 100vh;
          background: url('https://st2.depositphotos.com/2880321/11137/v/450/depositphotos_111378134-stock-illustration-vector-stars-in-night-sky.jpg') repeat;
          opacity: 0.25;
          animation: move-stars 80s linear infinite;
          pointer-events: none;
        }
        @keyframes move-stars {
          from { background-position: 0 0; }
          to { background-position: 800px 400px; }
        }
        `}
      </style>
      {theme === "dark" && <div className="star-background"></div>}
      <BrowserRouter>
        <nav style={navStyles}>
          <Link to="/" style={{ ...linkStyle, marginRight: "10px" }}>Inicio</Link>
          <Link to="/current" style={linkStyle}>Clima actual</Link>
          <Link to="/hourly" style={{ ...linkStyle, marginLeft: "10px" }}>Por hora</Link>
          <Link to="/daily" style={{ ...linkStyle, marginLeft: "10px" }}>Por día</Link>
          <Link to="/cities" style={{ ...linkStyle, marginLeft: "10px" }}>Ciudades grandes</Link>
          <div style={{ flex: 1 }} />
          <button
            onClick={toggleTheme}
            style={{
              background: theme === "dark" ? "#8551e6" : "#22243d",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "8px 18px",
              fontSize: "1rem",
              cursor: "pointer",
              marginRight: "12px"
            }}
          >
            {theme === "dark" ? "🌙 Tema Oscuro" : "☀️ Tema Claro"}
          </button>
          <div className="unit-toggle">
            <button
              className={`unit-btn${unit === "C" ? " active" : ""}`}
              onClick={() => setUnit("C")}
              disabled={unit === "C"}
            >
              °C
            </button>
            <button
              className={`unit-btn${unit === "F" ? " active" : ""}`}
              onClick={() => setUnit("F")}
              disabled={unit === "F"}
            >
              °F
            </button>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<WheaterApp unit={unit} setUnit={setUnit} />} />
          <Route path="/current" element={
            <CurrentWeather weather={{
              city: "Helsinki",
              country: "Finland",
              temp: -1,
              feels_like: -4,
              status: "Snow",
              wind: 5.14,
              time: "11:45 AM",
              temp_min: -1,
              temp_max: 3,
              icon: "13d",
            }} unit={unit} />
          } />
          <Route path="/hourly" element={
            <HourlyForecast forecast={[
              { hour: "9:00 AM", temp: -1, status: "Snow", icon: "13d" },
              { hour: "12:00 AM", temp: 0, status: "Drizzle", icon: "09d" },
            ]} unit={unit} />
          } />
          <Route path="/daily" element={
            <DailyForecast forecast={[
              { day: "Today", temp_min: -1, temp_max: 3, status: "Clouds", icon: "03d" },
              { day: "Fri", temp_min: -2, temp_max: 2, status: "Snow", icon: "13d" },
            ]} unit={unit} />
          } />
          <Route path="/cities" element={
            <CityWeather cities={[
              { city: "New York", country: "US", temp: 14, status: "Clear sky", icon: "01d" },
              { city: "Copenhagen", country: "Denmark", temp: 0, status: "Snow", icon: "13d" },
            ]} unit={unit} />
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}