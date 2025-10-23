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
    // button
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#101010",
          textTransform: "none",
          fontWeight: 400,
          padding: "8px 20px",
          borderRadius: "8px",
          transition: "all 0.3s ease",
        },
        // overriding variant
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
      // custom variant
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

    // input(text, password, etc...)
    MuiInput: {
      styleOverrides: {
        root: {
          border: "1px solid #5f2162",
        },
        // filled: {
        //   backgroundColor: "transparent",
        // },
      },
    },
  },
});
