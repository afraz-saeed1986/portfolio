import { blue, red } from "@mui/material/colors";
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
    },
    components: {
        MuiButtonBase: {
            defaultProps:{
                disableRipple: true
            }
        },
        MuiButton: {
            variants: [
                {
                    props: {variant: 'dashed'},
                    style: {
                        textTransform: 'none',
                        border: `2px dashed ${blue[500]}`,
                    }
                },
                {
                    props: {variant: 'dashed', color: 'secondary'},
                    style: {
                        border: `4px dashed ${red[500]}`,
                    }
                }
            ]
        }
    }
  });