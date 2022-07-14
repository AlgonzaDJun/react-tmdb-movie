import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

import tmdb from "../apis/tmdb";
import MovieCard from "../components/MovieCard";
import {useSearchParams} from 'react-router-dom'

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [queryParams, setQueryParams] = useSearchParams()
  const [isReady, setReady] = useState(false)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await tmdb.get("trending/movie/week");
        setMovies(fetchedMovies.data.results);
        setReady(true)
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [isReady]);


  const setSortParams = (type) => {
    queryParams.set("sort", type)
    setQueryParams(queryParams)
  }

  useEffect(() => {
    if(!isReady) return;
    const sortMovies = (type) => {
      if(type === "asc") {
        const sortedAsc = movies.sort(((a, b) => a.vote_average - b.vote_average));
        setMovies(sortedAsc)
      }
      if(type === "desc") {
        const sortedDesc = movies.sort(((a, b) => b.vote_average - a.vote_average));
        setMovies(sortedDesc)
      }
    }
    sortMovies(queryParams.get('sort'))
  }, [queryParams, isReady])

  return (
    <>
      <Box sx={{
        display:'flex',
        justifyContent:'flex-end',
        mt:10}}>
        Sort By Rating
        <Button onClick={() => setSortParams("asc")}>Asc</Button>
        <Button onClick={() => setSortParams("desc")}>Desc</Button>
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
