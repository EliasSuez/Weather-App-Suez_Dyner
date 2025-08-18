import { useState } from "react";
import { TemperatureUnitContext } from "./TemperatureUnitContext";

export function TemperatureUnitProvider({ children }) {
  const [unit, setUnit] = useState("C"); // "C" o "F"
  return (
    <TemperatureUnitContext.Provider value={{ unit, setUnit }}>
      {children}
    </TemperatureUnitContext.Provider>
  );
}