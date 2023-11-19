import axios from "axios";

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

export const getWeatherData = async (query) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
