import {ThemeProvider} from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from '@emotion/react';
import {HelmetProvider, Helmet} from "react-helmet-async";
import CreateCache from "@emotion/cache";
import {prefixer} from "stylis";
import { theme } from "./../ui/theme";

//NOTE Create RTL Cache
const cacheRTL = CreateCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
  })

const MainLayout = ({ children }) => {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>وب سایت شخصی</title>
          </Helmet>
          {children}
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
