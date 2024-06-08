import React from "react";

function MovieCard(props) {
  return (
    <div className="movie-list-item">
      <img
        className="movie-list-item-img"
        src="../public/images/KOS.jpeg"
        alt=""
      />
      <span className="movie-list-item-title">{props.movie.title}</span>
      <p className="movie-list-item-rate">{props.movie.rate}</p>
      <button className="movie-list-item-button">watch</button>
    </div>
  );
}
export default MovieCard;
