import {Box, Hidden, Typography, Avatar,Tabs, Tab, Divider} from "@mui/material";
import {
    HomeRounded,
    FaceRounded,
    TextSnippetRounded,
    TerminalRounded,
    MessageRounded,
    ConnectWithoutContactRounded,
    FavoriteRounded,
    CopyrightRounded
  } from "@mui/icons-material";
  import { grey } from "@mui/material/colors";


const DrawerContent = ({value, handleChange, setDrawerOpen }) => {

    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls":`tabpanel-${index}`
        };
    }

   return (
    <Box sx={{ justifyContent: "center", textAlign: "center", mt: 2 }}>
  
      <Avatar
        src={require("../../assets/avatar.png")}
        variant="rounded"
        sx={{ height: 200, width: 200, margin: "0 auto", display:{
            xl:"block",
            lg: "block",
            md: "block",
            sm: "none",
            xs: "none"
        } }}
      >
        SA
      </Avatar>
   
    <Typography variant="h6" color="whitesmoke">
      سعید افراز
    </Typography>
    <Typography variant="caption" color="whitesmoke">
      مدرس برنامه نویسی و توسعه دهنده فول استک
    </Typography>

    <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />

    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={value}
      onChange={handleChange}
    >
      <Tab label="صفحه اصلی" icon={<HomeRounded />} iconPosition="start" onClick={() => setDrawerOpen(false)} {...tabProps(0)} sx={{
        "&.MuiTab-root":{
            backgroundColor: grey[800],
            borderRadius: 2,
            my: 0.5,
            mx: 1,
            minHeight: 50
        }
      }} />

      <Tab label="درباره من" icon={<FaceRounded />} iconPosition="start" onClick={() => setDrawerOpen(false)} {...tabProps(1)} sx={{
        "&.MuiTab-root":{
            backgroundColor: grey[800],
            borderRadius: 2,
            my:0.5,
            mx: 1,
            minHeight: 50
        }
      }} />

      <Tab label="رزومه من" icon={<TextSnippetRounded />} iconPosition="start" onClick={() => setDrawerOpen(false)} {...tabProps(2)} sx={{
        "&.MuiTab-root":{
            backgroundColor: grey[800],
            borderRadius: 2,
            my:0.5,
            mx: 1,
            minHeight: 50
        }
      }} />

      <Tab label="نمونه کارها" icon={<TerminalRounded />} iconPosition="start" onClick={() => setDrawerOpen(false)} {...tabProps(3)} sx={{
        "&.MuiTab-root":{
            backgroundColor: grey[800],
            borderRadius: 2,
            my:0.5,
            mx: 1,
            minHeight: 50
        }
      }} />

      <Tab label="نظرات دانشجویان" icon={<MessageRounded />} iconPosition="start" onClick={() => setDrawerOpen(false)} {...tabProps(4)} sx={{
        "&.MuiTab-root":{
            backgroundColor: grey[800],
            borderRadius: 2,
            my:0.5,
            mx: 1,
            minHeight: 50
        }
      }} />

      <Tab label="ارتباط با من" icon={<ConnectWithoutContactRounded />} iconPosition="start" onClick={() => setDrawerOpen(false)} {...tabProps(5)} sx={{
        "&.MuiTab-root":{
            backgroundColor: grey[800],
            borderRadius: 2,
            my:0.5,
            mx: 1,
            minHeight: 50
        }
      }} />

    </Tabs>

    <Divider variant="middle" color={grey[900]} sx={{mt:2}} />

    <Box sx={{flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "end", alignItems: "center", height: 100}}>
          <Typography variant="subtitle2" color="whitesmoke">
            طراحی شده با {" "}
                <FavoriteRounded sx={{verticalAlign: "middle", color: "tomato", height: 20}} />
          </Typography>

          
          <Typography variant="caption" color="whitesmoke" sx={{mt: 2}}>
                    کپی رایت 1403  {" "}
                    <CopyrightRounded sx={{verticalAlign: "middle", height: 16}} />
          </Typography>
    </Box>
  </Box>
   )
}

export default DrawerContent;