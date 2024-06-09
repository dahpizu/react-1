import React from "react";
import MovieCard from "./MovieCard";

export const NewRelease = (props) => {
  return (
    <div className="movie-list-container">
      <h1>New Release</h1>
      <div className="movie-list-wrapper">
        <div className="movie-list">
          {props.movies.map((item) => (
            <MovieCard movie={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
