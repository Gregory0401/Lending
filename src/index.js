import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./utils/GlobalStyled";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
