import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import tmdb from "../apis/tmdb";

import MovieCard from "../components/MovieCard";
// import fetchedMovies from "../data/fetchedMovies.json";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    // You can await here
    const response = await tmdb.get("trending/movie/week");
    setMovies(response.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        mt: 5,
      }}
    >
      {movies.map((movie) => (
        <MovieCard movie={movie}></MovieCard>
      ))}
    </Box>
  );
};

export default MovieList;
