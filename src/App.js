import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Box, ThemeProvider } from "@mui/material";

import Navbar from "./components/Navbar";
import MovieList from "./containers/MovieList";
import theme from "./themes/theme";
import { Route, Routes } from "react-router-dom";
import About from "./containers/About";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="about" element={<About />} />
          <Route path="indonesian" element={<div style={{margin: "70px"}}>Indonesian</div>} />
          <Route path="pricing" element={<div style={{margin: "70px"}}>Pricing</div>} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
