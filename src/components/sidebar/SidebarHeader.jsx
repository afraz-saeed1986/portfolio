import { Typography} from "@mui/material";
import {RandomReveal} from "react-random-reveal";
import {alphabetPersian} from "../../constants/alphabetPersian";
import { useState } from "react";

import avatar from "../../assets/avatar.png";
import ThemeActionButton from "../ThemeActionButton";
import { CustomAvatar } from "../common";
import SocialMediaIcons from "../SocialMediaIcons";

const SidebarHeader = () => {
  const [start, setStart] = useState(false);

    return (
        <>
    <ThemeActionButton />
    <CustomAvatar avatar={avatar} size={200} fallback="SA" />
   
    <Typography variant="h6" color="#F93C92">
      <Typography variant="caption" color="tomato">
        {" {{ "}
      </Typography>
      <RandomReveal isPlaying duration={4} characterSet={alphabetPersian} characters="سعید افراز" onComplete={() => setStart(true)} />
      <Typography variant="caption" color="tomato">
        {" }} "}
      </Typography>
    </Typography>

    {start && (
    
    <Typography variant="caption" color="gray">
    <Typography variant="caption" color="tomato">
        [[{"  "}
      </Typography>
      <RandomReveal isPlaying characterSet={alphabetPersian} duration={4} characters="توسعه دهنده فول استک و مدرس" />
      <Typography variant="caption" color="tomato">
        {"  "}]]
      </Typography>
    </Typography>

    )}

       {/* Social media Icons */}
       <SocialMediaIcons />
        </>
    );
}

export default SidebarHeader;