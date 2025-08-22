import { useState } from "react";

export function useWeatherApp() {
  const [unit, setUnit] = useState("C"); // "C" para Celsius, "F" para Fahrenheit

  return { unit, setUnit };
}