import { useEffect, useState } from "react";

import SwipeableViews from "react-swipeable-views";
import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import Page from "../pages/components/Page";
import {Typography, useMediaQuery } from "@mui/material";
import {useTheme} from "@mui/material/styles";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { DrawerActionButton } from "../components/drawer";

import {Home, About, Resume, Courses, Comments} from "../pages";

function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
      if(isMdUp){
        setDrawerOpen(false);
      }
  }, [isMdUp]);

  const handlePageNumber = (event, newPage) => {
    setPageNumber(newPage);
  };

  return (
    <MainContext.Provider value={{pageNumber, handlePageNumber, drawerOpen, setDrawerOpen}}>
      <MainLayout>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>

        <DrawerActionButton />

        <PagesContainer>
          <SwipeableViews index={pageNumber} onChangeIndex={handlePageNumber}>
              <Page pageNumber={pageNumber} index={0}>
                <Home helmetTitle="وب سایت شخصی" />
              </Page>
              <Page pageNumber={pageNumber} index={1}>
                <About helmetTitle="وب سایت شخصی | درباره من" />
              </Page>
              <Page pageNumber={pageNumber} index={2}>
                 <Resume helmetTitle="وب سایت شخصی | رزومه من" />
              </Page>
              <Page pageNumber={pageNumber} index={3}>
                <Courses helmetTitle="وب سایت شخصی | دوره های من" />
              </Page>
              <Page pageNumber={pageNumber} index={4}>
                <Comments helmetTitle="وب سایت شخصی | نظرات دانشجویان" />
              </Page>
              <Page pageNumber={pageNumber} index={5}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  ارتباط با من
                </Typography>
              </Page>
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
