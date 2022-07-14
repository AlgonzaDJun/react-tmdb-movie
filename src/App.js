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
import Pricing from './containers/Pricing';
import Subscribed from './containers/Subscribed';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="about" element={<Box sx={{ mt: 10 }}>Halaman about</Box>} />
          <Route path="indonesian" element={<Box sx={{ mt: 10 }}>Halaman indonesian</Box>} />
          <Route path="pricing" element={<Pricing/>} />
          <Route path="subscribed" element={<Subscribed/>} />
          <Route path="subscribed/:plan" element={<Subscribed/>} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
