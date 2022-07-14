import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

import tmdb from "../apis/tmdb";
import MovieCard from "../components/MovieCard";
import {useSearchParams} from 'react-router-dom'

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await tmdb.get("trending/movie/week");
        setMovies(fetchedMovies.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  const [queryParams, setQueryParams] = useSearchParams()

  const setSortParams = (type) => {
    queryParams.set("sort", type)
    setQueryParams(queryParams)
  }

  return (
    <>
      <Box sx={{
        display:'flex',
        justifyContent:'flex-end',
        mt:10}}>
        Sort By Rating
        <Button onClick={() => setSortParams("asc")}>Asc</Button>
        <Button onClick={() => setSortParams("desc")}>Dsc</Button>
      </Box>
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
    </>
  );
};

export default MovieList;
