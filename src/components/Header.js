import React from "react";
import { Typography, Box } from "@mui/material";
import { alpha } from "@mui/system";

const Header = () => {
  return (
    <Box
      position="fixed"
      top={0}
      width="100%"
      py={2}
      bgcolor={alpha("#000", 0.5)} // decrease the opacity here
    >
      <Typography variant="h6" className="header" align="center">
        Weather App
      </Typography>
    </Box>
  );
};

export default Header;
