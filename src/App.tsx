import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { darkTheme } from "./theme/darkTheme";
import { theme } from "./theme/theme";

function App() {
  const [mode, setMode] = useState(false);

  const handleClick = () => {
    setMode(!mode);
  };

  return (
    <>
      <ThemeProvider theme={mode ? darkTheme : theme}>
        <CssBaseline />
        <header>
          <button type="button" onClick={handleClick}>
            다크모드 토글
          </button>
        </header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
        <footer>footer</footer>
      </ThemeProvider>
    </>
  );
}

export default App;
