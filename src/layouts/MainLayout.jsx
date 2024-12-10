import {ThemeProvider} from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from '@emotion/react';
import {HelmetProvider, Helmet} from "react-helmet-async";
import CreateCache from "@emotion/cache";
import {prefixer} from "stylis";
import { lightTheme, darkTheme } from "./theme";
import Grid from "@mui/material/Unstable_Grid2";



//NOTE Create RTL Cache
const cacheRTL = CreateCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
  })

const MainLayout = ({ children, mode }) => {

  const theme = mode === "dark" ? darkTheme : lightTheme;
  
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>

           <Grid container sx={{height: "100vh"}}>
              {children}
           </Grid>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
