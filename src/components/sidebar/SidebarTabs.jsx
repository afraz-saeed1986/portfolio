import {useContext} from "react";
import MainContext from "../../context";
import {Tabs, Tab} from "@mui/material";

import { grey } from "@mui/material/colors";
import {tabsData} from "../data/tabsData.sidebar";

const SidebarTabs = () => {
  const {pageNumber, handlePageNumber, setDrawerOpen} = useContext(MainContext);

  const data = tabsData();
    
    return (
        <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      onChange={handlePageNumber}
    >
      {
        data.map((tab,index) => (
          <Tab key={index} label={tab.label} icon={tab.icon} iconPosition="start" onClick={() => setDrawerOpen(false)} {...tab} sx={{
            "&.MuiTab-root":{
                backgroundColor: grey[800],
                borderRadius: 2,
                my: 0.5,
                mx: 1,
                minHeight: 50
            }
          }} />
        ))
      }
      
    </Tabs>
    );
}

export default SidebarTabs;