import React, { createContext, useState, useEffect } from "react";
import { debounce } from "lodash";
import { getWeatherData } from "../services/WeatherService";

export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = debounce(async (query) => {
    setSearchQuery(query);
    if (query) {
      const data = await getWeatherData(query);
      setWeatherData(data);
    } else {
      setWeatherData(null);
    }
  }, 500);

  useEffect(() => {
    if (searchQuery === "") {
      setWeatherData(null);
    }
  }, [searchQuery]);

  return (
    <WeatherContext.Provider value={{ searchQuery, weatherData, handleSearch }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
