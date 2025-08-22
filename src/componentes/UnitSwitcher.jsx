import { useWeatherApp } from "../hooks/useWeatherApp";

export default function UnitSwitcher() {
  const { unit, setUnit } = useWeatherApp();

  return (
    <div style={{
      display: "flex",
      gap: "24px",
      justifyContent: "center",
      alignItems: "center",
      margin: "16px 0"
    }}>
      <span
        style={{
          color: unit === "C" ? "#fff" : "#888",
          fontWeight: unit === "C" ? "bold" : "normal",
          fontSize: "1.5rem",
          cursor: "pointer"
        }}
        onClick={() => setUnit("C")}
      >
        °C
      </span>
      <span
        style={{
          color: unit === "F" ? "#fff" : "#888",
          fontWeight: unit === "F" ? "bold" : "normal",
          fontSize: "1.5rem",
          cursor: "pointer"
        }}
        onClick={() => setUnit("F")}
      >
        °F
      </span>
    </div>
  );
}