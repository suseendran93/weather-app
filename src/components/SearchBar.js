import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { Autocomplete, TextField } from "@mui/material";

const SearchBar = () => {
  const { handleSearch, searchQuery } = useContext(WeatherContext);

  const handleChange = (event, value) => {
    handleSearch(value);
  };
  const cityOptions = ["Chennai", "London", "Mumbai", "Dublin", "Delhi"];

  return (
    <div className="search-bar-container">
      <Autocomplete
        value={searchQuery}
        onChange={handleChange}
        options={cityOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            type="text"
            placeholder="Search location..."
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  );
};

export default SearchBar;
