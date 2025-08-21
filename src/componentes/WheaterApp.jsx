import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import CityWeather from "./CityWeather";
import Header from "./Header"; 

export default function WheaterApp() {
  const mockCurrentWeather = {
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
  };

  const mockHourly = [
    { hour: "9:00 AM", temp: -1, status: "Snow", icon: "13d" },
    { hour: "12:00 AM", temp: 0, status: "Drizzle", icon: "09d" },
    { hour: "3:00 PM", temp: 1, status: "Clouds", icon: "03d" },
    { hour: "6:00 PM", temp: 3, status: "Clear", icon: "01d" },
    { hour: "9:00 PM", temp: 2, status: "Mist", icon: "50d" },
    { hour: "12:00 PM", temp: 0, status: "Thunderstorm", icon: "11d" },
    { hour: "3:00 AM", temp: 1, status: "Rain", icon: "10d" },
    { hour: "6:00 AM", temp: 1, status: "Clouds", icon: "03d" },
  ];

  const mockDaily = [
    { day: "Today", temp_min: -1, temp_max: 3, status: "Clouds", icon: "03d" },
    { day: "Fri", temp_min: -2, temp_max: 2, status: "Snow", icon: "13d" },
    { day: "Sat", temp_min: -3, temp_max: 1, status: "Clear", icon: "01d" },
    { day: "Sun", temp_min: 4, temp_max: 7, status: "Clouds", icon: "03d" },
    { day: "Mon", temp_min: 1, temp_max: 7, status: "Thunderstorm", icon: "11d" },
  ];

  const mockCities = [
    { city: "New York", country: "US", temp: 14, status: "Clear sky", icon: "01d" },
    { city: "Copenhagen", country: "Denmark", temp: 0, status: "Snow", icon: "13d" },
    { city: "Ho Chi Minh City", country: "Vietnam", temp: 28, status: "Thunderstorm", icon: "11d" },
  ];

  return (
    <div className="weather-app-container">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
        body, .weather-app-container, * {
          font-family: 'Montserrat', Arial, sans-serif !important;
        }
        body {
          background: linear-gradient(135deg, #23254e 0%, #2d2347 100%);
          color: #fff;
          margin: 0;
          min-height: 100vh;
        }
        .weather-app-container {
          max-width: 1400px;
          margin: 40px auto;
          background: rgba(24, 26, 52, 0.95);
          border-radius: 25px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, .37);
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }
        .search-bar {
          background: #191c36;
          color: #fff;
          border: none;
          border-radius: 14px;
          padding: 12px 18px;
          font-size: 1.05rem;
          width: 250px;
          margin-right: 16px;
        }
        .search-bar::placeholder {
          color: #b4b4e6;
        }
        .unit-toggle {
          display: flex;
          gap: 7px;
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
        main {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 28px;
        }
        section, aside {
          margin-bottom: 12px;
        }
        @media (max-width: 900px) {
          .weather-app-container {
            max-width: 98vw;
            padding: 12px;
          }
          main {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }
        `}
      </style>
      <Header /> 
      <main>
        <section>
          <CurrentWeather weather={mockCurrentWeather} />
        </section>
        <section>
          <HourlyForecast forecast={mockHourly} />
        </section>
        <section>
          <DailyForecast forecast={mockDaily} />
        </section>
        <aside>
          <CityWeather cities={mockCities} />
        </aside>
      </main>
    </div>
  );
}