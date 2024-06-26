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

const theme = createTheme({
  typography,
});

export default theme;
