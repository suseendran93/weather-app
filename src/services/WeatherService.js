import axios from "axios";

const API_KEY = "6e1d8ec56613e19e68ea323e4af1fa10";

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
