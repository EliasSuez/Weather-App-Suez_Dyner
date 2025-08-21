import { WeatherAppProvider } from "./context/WeatherAppProvider";
import App from "./App"; // o tu componente principal

export default function AppRoot() {
  return (
    <WeatherAppProvider>
      <App />
    </WeatherAppProvider>
  );
}