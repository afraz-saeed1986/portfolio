import {Typography} from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const Info = ({children}) => {
    return (
        <Typography variant="body1" color="black" textAlign="left" sx={{mt:2}}>
            {children}
            <KeyboardArrowLeftRounded sx={{verticalAlign:"bottom", color: "primary.main", width: 30 }} />
        </Typography>
    );
}

const DevInfo = () => {
    return (
        <>
                     <Info>
                        نام و نام خانوادگی : سعید افراز
                      </Info>
                      <Info>سن : 30 سال</Info>
                      <Info>شهر : تهران</Info>
                      <Info>saeed.az@gmail.com : آدرس ایمیل</Info>
                      <Info>شماره موبایل : 09110000000</Info>
        </>
    )
}

export default DevInfo;