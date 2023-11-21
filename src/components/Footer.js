import React from "react";
import { Typography, Box } from "@mui/material";
import { alpha } from "@mui/system";

const Footer = () => {
  return (
    <Box
      mt={4}
      position="fixed"
      bottom={0}
      width="100%"
      py={2}
      boxShadow={3}
      bgcolor={alpha("#000", 0.5)} // decrease the opacity here
    >
      <Typography variant="body2" className="header" align="center">
        Explore the weather conditions in different locations with our Weather
        App.
      </Typography>
    </Box>
  );
};

export default Footer;
