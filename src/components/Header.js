import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <CloudIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Weather App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
