import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const SearchBar = () => {
  const { handleSearch } = useContext(WeatherContext);

  const handleChange = (e) => {
    const query = e.target.value;
    handleSearch(query);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search location..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
