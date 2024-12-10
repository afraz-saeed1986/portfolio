import {useTheme} from "@mui/material/styles";
import {Fab, Box} from "@mui/material";
import {WbSunnyOutlined, NightlightOutlined} from "@mui/icons-material";

import mainContext from "../context";
import { useContext } from "react";

const ThemeActionButton = () => {
  const theme = useTheme();
  const {handleThemeChange} = useContext(mainContext);


    return (
        <Box
        sx={{
          position: "absolute",
          display:{
            xs: "none",
            md: "block",
          },
        }}
      >
        <Fab aria-label="ThemeChanger" variant="extended" size="small" color="secondary" onClick={handleThemeChange} 
         sx={{ml: 1, color: "whitesmoke"}}>
          {theme.palette.mode === "dark" ? <WbSunnyOutlined sx={{mr: 0}} /> : <NightlightOutlined sx={{mr: 0}} />}
          {/* {theme.palette.mode === "dark" ? "تم روز" : "تم شب"} */}
        </Fab>
      </Box>
    );
}

export default ThemeActionButton;