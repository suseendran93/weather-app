import React from "react";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <header
      style={{ backgroundColor: "#1976d2", padding: "1rem", color: "#fff" }}
    >
      <Typography variant="h4">Weather App</Typography>
    </header>
  );
};

export default Header;
