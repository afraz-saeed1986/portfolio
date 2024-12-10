import {createTheme} from "@mui/material/styles";


export const lightTheme = createTheme({
    direction: "rtl",
    palette:{
        mode: "light",
        primary: {
            main: "#03A9F4"
        },
        secondary: {
            main: "#673AB7"
        }
    },
    typography: {
      fontFamily: "tanha, vazir, roboto",
    },
  });

  export const darkTheme = createTheme({
    direction: "rtl",
    palette:{
        mode: "dark",
        primary: {
            main: "#03A9F4"
        },
        secondary: {
            main: "#673AB7"
        }
    },
    typography: {
      fontFamily: "tanha, vazir, roboto",
    },
  });