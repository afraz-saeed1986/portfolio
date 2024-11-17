import {ThemeProvider, createTheme} from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from '@emotion/react';
import {HelmetProvider, Helmet} from "react-helmet-async";
import CreateCache from "@emotion/cache";
import {prefixer} from "stylis";

import './App.css';
import {Button} from "@mui/material";

//NOTE Create Custome Theme
const theme = createTheme({
  direction: "rtl",
});

//NOTE Create RTL Cache
const cacheRTL = CreateCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin]
})


function App() {
  return (
    <CacheProvider value={cacheRTL}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <Helmet>
              <title>وب سایت شخصی</title>
            </Helmet>
              <div className="App">
                <Button variant='contained'>کلیک کن</Button>
              </div>
          </HelmetProvider>
        </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
