import { createTheme } from "@vanilla-extract/css";
import { colorContract } from "./themeCotnract.css";

export const lightTheme = createTheme(colorContract, {
  header: {
    color: "#fff",
    background: "#0875c1",
  },
});
