import React from "react";
import MovieCard from "./MovieCard";
const movies = [
  { id: 1, title: "Movie 1", description: "Description of Movie 1" },

  { id: 2, title: "Movie 2", description: "Description of Movie 2" },
];

export const NewRelease = (props) => {
  const movie = { title: "movie title ", rate: 3.4 };
  return (
    <div className="movie-list-container">
      <h1>New Release</h1>
      <div className="movie-list-wrapper">
        <div className="movie-list">
          {movies.map((item) => (
            <MovieCard movie={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
