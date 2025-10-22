import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
  },

  // typography
  typography: {
    fontFamily: "'Noto Sans KR', sans-serif",
  },

  // component
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          textTransform: "none",
          fontWeight: 600,
          padding: "8px 20px",
          transition: "all 0.3s ease",
          color: "#101010",
        },
        contained: {
          backgroundColor: "#6b46c1",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#553c9a",
          },
        },
        outlined: {
          borderColor: "#6b46c1",
          color: "#6b46c1",
          "&:hover": {
            backgroundColor: "rgba(107, 70, 193, 0.08)",
            borderColor: "#553c9a",
          },
        },
        text: {
          color: "#6b46c1",
          "&:hover": {
            backgroundColor: "rgba(107, 70, 193, 0.1)",
          },
        },
      },
      variants: [
        {
          props: { variant: "soft" },
          style: {
            backgroundColor: "rgba(107, 70, 193, 0.1)",
            color: "#6b46c1",
            border: "1px solid rgba(107, 70, 193, 0.2)",
            "&:hover": {
              backgroundColor: "rgba(107, 70, 193, 0.2)",
            },
          },
        },
        {
          props: {
            variant: "ghost",
          },
          style: {
            backgroundColor: "transparent",
            color: "#6b46c1",
            border: "none",
            "&:hover": {
              backgroundColor: "rgba(107, 70, 193, 0.08)",
            },
          },
        },
      ],
    },
    MuiInput: {
      styleOverrides: {
        root: {
          border: "1px solid #010101",
        },
      },
    },
  },
});
