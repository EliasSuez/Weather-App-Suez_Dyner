import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WheaterApp from "./componentes/WheaterApp";
import CityWeather from "./componentes/CityWeather";
import CurrentWeather from "./componentes/CurrentWeather";
import HourlyForecast from "./componentes/HourlyForecast";
import DailyForecast from "./componentes/DailyForecast";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: "1.5rem" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Inicio</Link>
        <Link to="/current">Clima actual</Link>
        <Link to="/hourly" style={{ marginLeft: "10px" }}>Por hora</Link>
        <Link to="/daily" style={{ marginLeft: "10px" }}>Por día</Link>
        <Link to="/cities" style={{ marginLeft: "10px" }}>Ciudades grandes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<WheaterApp />} />
        <Route path="/current" element={<CurrentWeather weather={{
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
        }} />} />
        <Route path="/hourly" element={<HourlyForecast forecast={[
          { hour: "9:00 AM", temp: -1, status: "Snow", icon: "13d" },
          { hour: "12:00 AM", temp: 0, status: "Drizzle", icon: "09d" },
        ]} />} />
        <Route path="/daily" element={<DailyForecast forecast={[
          { day: "Today", temp_min: -1, temp_max: 3, status: "Clouds", icon: "03d" },
          { day: "Fri", temp_min: -2, temp_max: 2, status: "Snow", icon: "13d" },
        ]} />} />
        <Route path="/cities" element={<CityWeather cities={[
          { city: "New York", country: "US", temp: 14, status: "Clear sky", icon: "01d" },
          { city: "Copenhagen", country: "Denmark", temp: 0, status: "Snow", icon: "13d" },
        ]} />} />
      </Routes>
    </BrowserRouter>
  );
}