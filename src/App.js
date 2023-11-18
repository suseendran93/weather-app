import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherContextProvider from "./context/WeatherContext";
import "./App.css";
function App() {
  return (
    <WeatherContextProvider>
      <div className="App">
        <Header />
        <SearchBar />
        <WeatherCard />
      </div>
    </WeatherContextProvider>
  );
}

export default App;
