const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "28056858d8cf9c6a74aaaee3bec5622b";

export async function getCurrentWeather(city, units = "metric") {
  const res = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=${units}`
  );
  if (!res.ok) throw new Error("No se pudo obtener el clima");
  return await res.json();
}