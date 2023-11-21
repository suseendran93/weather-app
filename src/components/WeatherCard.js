import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { Card, CardContent, Typography, Grid, Divider } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import GrainIcon from "@mui/icons-material/Grain";

const WeatherCard = () => {
  const { weatherData } = useContext(WeatherContext);

  const getWeatherIcon = () => {
    const weatherCondition = weatherData?.weather[0].main.toLowerCase();

    switch (weatherCondition) {
      case "clear":
        return <WbSunnyIcon fontSize="large" />;
      case "clouds":
        return <CloudIcon fontSize="large" />;
      case "rain":
        return <GrainIcon fontSize="large" />;
      case "smoke":
        return <CloudIcon fontSize="large" />;
      case "wind":
        return <NightsStayIcon fontSize="large" />;
      default:
        return null;
    }
  };

  return (
    weatherData && (
      <Card
        className="weather-card"
        variant="outlined"
        sx={{ minWidth: 300, boxShadow: 4 }}
      >
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={8}>
              <Typography variant="h5" component="div" gutterBottom>
                {weatherData?.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {weatherData?.weather[0].description}
              </Typography>
            </Grid>
            <Grid item xs={4} textAlign="center">
              {getWeatherIcon()}
            </Grid>
          </Grid>
          <Divider sx={{ my: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="subtitle2" color="text.secondary">
                Temperature
              </Typography>
              <Typography variant="h6" color="primary">
                {weatherData?.main.temp}°C
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2" color="text.secondary">
                Humidity
              </Typography>
              <Typography variant="h6" color="primary">
                {weatherData?.main.humidity}%
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  );
};

export default WeatherCard;
