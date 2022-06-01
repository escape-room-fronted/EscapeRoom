import { createTheme } from "react-data-table-component";

export const themeEducamas = createTheme(
  "educamas",
  {
    text: {
      primary: "#fff",
      secondary: "#fff",
    },
    background: {
      default: "#242424",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "#717171",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "dark"
);
