import React from "react";
import MovieCard from "./MovieCard";
import PacmanLoader from "react-spinners/PacmanLoader";

export const NewRelease = (props) => {
  return (
    <div className="movie-list-container">
      <h1>New Release</h1>

      {props.isLoading ? (
        <PacmanLoader
          color="teal"
          loading={true}
          // cssOverride={override}
          size={120}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="movie-list-wrapper">
          <div className="movie-list">
            {props.movies.map((item) => (
              <MovieCard movie={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
