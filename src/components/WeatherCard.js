import React, { useContext } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { WeatherContext } from "../context/WeatherContext";

const WeatherCard = () => {
  const { weatherData } = useContext(WeatherContext);
  console.log();
  return (
    weatherData && (
      <Card
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          {/* Display weather data */}

          <div>
            <Typography variant="h6">
              {weatherData.name + ` , ${weatherData.sys.country}`}
            </Typography>
            <Typography variant="body1">
              {weatherData.weather[0].description}
            </Typography>
            <Typography variant="body1">
              Temperature: {weatherData.main.temp}°C
            </Typography>
          </div>
        </CardContent>
      </Card>
    )
  );
};

export default WeatherCard;
