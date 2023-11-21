import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherContextProvider from "./context/WeatherContext";
import { Container, CssBaseline, Typography, Paper, Box } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import img from "./assets/background.jpg";
function App() {
  return (
    <WeatherContextProvider>
      <div className="App">
        <Header />

        <Box
          sx={{
            backgroundImage: `url(${img})`, // Replace with the actual path to your background image
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CssBaseline />

          <Container component="main" maxWidth="sm">
            <Paper
              elevation={3}
              sx={{
                padding: 4,
                textAlign: "center",
                backdropFilter: "blur(5px)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <Typography
                component="h1"
                variant="h4"
                sx={{ marginTop: 2, marginBottom: 4, color: "#333" }}
              >
                Welcome to the Weather App
              </Typography>
              <SearchBar />
              <WeatherCard />
            </Paper>
          </Container>
          <Footer />
        </Box>
      </div>
    </WeatherContextProvider>
  );
}

export default App;
