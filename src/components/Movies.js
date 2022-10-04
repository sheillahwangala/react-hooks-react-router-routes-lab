import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map((movie) => 
    <div key={movie.title}>
      <h2>Name: {movie.title} </h2>
      <p>Runtime: {movie.time} min. </p>
      <ul>
        {movie.genres.map((genre) => (<li key={genre}>Genre: {genre} </li>))}
      </ul>
    </div>
  );
  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  );
};

export default Movies;
