import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { darkTheme } from "./theme/darkTheme";
import { theme } from "./theme/theme";
import IntroPage from "./pages/IntroPage";
import Header from "./component/layout/Header";

function App() {
  const [mode, setMode] = useState(false);

  return (
    <>
      <ThemeProvider theme={mode ? darkTheme : theme}>
        <CssBaseline />
        <BrowserRouter>
          <Layout mode={mode} setMode={setMode} />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

type Props = {
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
};

function Layout({ mode, setMode }: Props) {
  const location = useLocation();
  const isIntroPage = location.pathname === "/intro";

  const handleClick = () => {
    setMode(!mode);
  };

  return (
    <>
      {!isIntroPage && <Header onClick={handleClick} />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/intro" element={<IntroPage />} />
      </Routes>
    </>
  );
}

export default App;
