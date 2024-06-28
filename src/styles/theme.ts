import { createTheme, ThemeOptions } from "@mui/material/styles";

const typography: ThemeOptions["typography"] = {
  fontFamily: "DM Sans, sans-serif",
  h1: {
    fontSize: 85,
    fontWeight: 700,
  },
  h2: {
    fontSize: 60,
    fontWeight: 700,
  },
  h3: {
    fontSize: 40,
    fontWeight: 700,
  },
  h4: {
    fontSize: 32,
    fontWeight: 700,
  },
  h5: {
    fontSize: 28,
    fontWeight: 700,
  },
  h6: {
    fontSize: 24,
    fontWeight: 800,
  },
  subtitle1: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: "110%",
  },
  subtitle2: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: "160%",
  },
  body1: {
    fontSize: 16,
    fontWeight: 400,
  },
  body2: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "160%",
  },
  caption: {
    fontSize: 12,
    fontWeight: 400,
  },
  button: {
    textTransform: "none",
  },
};

const palette: ThemeOptions["palette"] = {
  background: {
    default: "#F8F9FC",
  },
  primary: {
    main: "#4F4FC3",
    light: "#63a4ff",
    dark: "#004ba0",
    contrastText: "#fff",
  },
  secondary: {
    main: "#dc004e",
    light: "#ff5c8d",
    dark: "#9a0036",
    contrastText: "#fff",
  },
  error: {
    main: "#f44336",
    light: "#e57373",
    dark: "#d32f2f",
    contrastText: "#fff",
  },
  warning: {
    main: "#ffa726",
    light: "#ffb74d",
    dark: "#f57c00",
    contrastText: "#fff",
  },
  info: {
    main: "#2196f3",
    light: "#64b5f6",
    dark: "#1976d2",
    contrastText: "#fff",
  },
  success: {
    main: "#4caf50",
    light: "#81c784",
    dark: "#388e3c",
    contrastText: "#fff",
  },
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
  text: {
    primary: "#212121",
    secondary: "#757575",
    disabled: "#bdbdbd",
  },
};

const theme = createTheme({
  typography,
  palette,
});

export default theme;
