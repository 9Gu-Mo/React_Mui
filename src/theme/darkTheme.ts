import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: "'Noto Sans KR', sans-serif",
  },
});
