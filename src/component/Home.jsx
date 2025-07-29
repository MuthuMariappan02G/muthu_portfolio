// import React from "react";
// import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import BackGroundVedio1 from "../assets/vedio/background-loop1.mp4";
// import BackGroundVedio2 from "../assets/vedio/background-loop2.mp4";

const Home = () => {
  return (
    <Box id="main"
      sx={{ position: "relative",  width: "100%",  height: "100vh", display: "flex",
        justifyContent: "center", alignItems: "center",
      }}
    >
      <video className="video-bg" src={BackGroundVedio1} autoPlay loop muted
        style={{ position: "absolute", width: "100%", height: "100vh", objectFit: "cover", zIndex: -10 }}
      />
      <Box sx={{ textAlign: "center", maxWidth: 700 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: "bold", color: "#000", textShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}
        >
          I'm Muthu Mariappan G
        </Typography>

        <Typography  variant="h5" component="h2" sx={{ mt: 1, color: "#000", textShadow: "1px 1px 5px rgba(0,0,0,0.5)" }}>
          I'm a Front-End Developer
          {/* <TypeAnimation sequence={["Developer."]} cursor repeat={Infinity} /> */}
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
          <IconButton href="#" 
            sx={{ color: "#000", "&:hover": { color: "#000", transform: "scale(1.2)" } }}
          >
            <FaFacebookF />
          </IconButton>
          <IconButton href="#"
             sx={{ color: "#000", "&:hover": { color: "#000", transform: "scale(1.2)" } }}
          >
            <FaInstagram />
          </IconButton>
          <IconButton href="https://github.com/MuthuMariappan02G" target="_blank" 
            sx={{ color: "#000", "&:hover": { color: "#000", transform: "scale(1.2)" } }}
          >
            <BsGithub />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/muthu-mariappan-g-a33593336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" 
            sx={{ color: "#000", "&:hover": { color: "#000", transform: "scale(1.2)" } }}
          >
            <FaLinkedinIn />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
