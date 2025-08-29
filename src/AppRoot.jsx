import ThemeProvider from "./context/ThemeProvider";
import { WeatherAppProvider } from "./context/WeatherAppProvider";
import App from "./App";

function AppRoot() {
  return (
    <ThemeProvider>
      <WeatherAppProvider>
        <App />
      </WeatherAppProvider>
    </ThemeProvider>
  );
}

export default AppRoot;