import {Avatar, Typography} from "@mui/material";

import avatar from "../../assets/avatar.png";

const SidebarHeader = () => {
    return (
        <>
            <Avatar
        src={avatar}
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
        </>
    );
}

export default SidebarHeader;