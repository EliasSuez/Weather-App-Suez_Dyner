import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function useThemeApp() {
  return useContext(ThemeContext);
}