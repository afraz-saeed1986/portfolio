import {createTheme} from "@mui/material/styles";

//NOTE Create Custome Theme
export const theme = createTheme({
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
      fontFamily: "vazir, roboto",
    }
  });