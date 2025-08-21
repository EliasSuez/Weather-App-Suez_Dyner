import { useState } from "react";
import { TemperaturaUnitContext } from "./TemperaturaUnitContext";

export function TemperaturaUnitProvider({ children }) {
  const [unit, setUnit] = useState("C");
  return (
    <TemperaturaUnitContext.Provider value={{ unit, setUnit }}>
      {children}
    </TemperaturaUnitContext.Provider>
  );
}