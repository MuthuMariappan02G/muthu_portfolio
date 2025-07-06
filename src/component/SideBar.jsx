import React, { useState } from "react";
import {
  Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  Apps as AppsIcon,
  Mail as MailIcon,
  Close as CloseIcon
} from "@mui/icons-material";
import Diversity3Icon from '@mui/icons-material/Diversity3';

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  const iconData = [
    { icon: <HomeIcon />, link: "main", text: "Home" },
    { icon: <WorkIcon />, link: "work", text: "Work" },
    { icon: <Diversity3Icon />, link: "projectwork", text: "ProjectWork" },
    { icon: <SchoolIcon />, link: "education", text: "Education" },
    // { icon: <AppsIcon />, link: "projects", text: "Project" },
    { icon: <MailIcon />, link: "contact", text: "Contact" },
  ];

  const toggleDrawer = () => setOpen(!open);

  const handleScroll = (id) => {
    setSelectedLink(id);
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: "smooth",
      });
    }
    setOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Icon */}
      <IconButton
        onClick={toggleDrawer}
        sx={{
          position: "fixed", top: 16, right: 16, zIndex: 1300, color: "#000",
          display: { sm: "none", lg: "none", xl: "none" }
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Mobile Sidebar */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <IconButton sx={{ display: "flex", justifyContent: "flex-end", p: 1, color: "#000" }}>
          <CloseIcon onClick={toggleDrawer} />
        </IconButton>

        <List sx={{ width: 250 }}>
          {iconData.map(({ icon, link, text }) => (
            <ListItemButton
              key={text}
              onClick={() => handleScroll(link)}
              selected={selectedLink === link}
            >
              <ListItemIcon sx={{ color: selectedLink === link ? "#1976d2" : "inherit" }}>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      {/* Desktop Sidebar */}
      <List
        sx={{
          position: "fixed", top: "50%", left: 16, gap: 2, padding: 1,
          transform: "translateY(-50%)",
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: 2,
          zIndex: 1100,
          pointerEvents: "auto",
        }}
      >
        {iconData.map(({ icon, link, text }, index) => (
          <IconButton
            title={text}
            key={index}
            onClick={() => handleScroll(link)}
            sx={{
              color: selectedLink === link ? "#1976d2" : "#00172d",
              backgroundColor: selectedLink === link ? "#e3f2fd" : "transparent",
              borderRadius: 2,
              "&:hover": { transform: "scale(1.1)" },
              transition: "transform 0.3s, background-color 0.3s",
              cursor: "pointer"
            }}
          >
            {icon}
          </IconButton>
        ))}
      </List>
    </>
  );
};

export default SideBar;
