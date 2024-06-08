import React from "react";

function MovieCard(props) {
  return (
    <div className="movie-list-item">
      <img
        className="movie-list-item-img"
        src="../public/images/KOS.jpeg"
        alt=""
      />
      <span className="movie-list-item-title">King Of Boys</span>
      <p className="movie-list-item-rate">5.2</p>
      <button className="movie-list-item-button">watch</button>
    </div>
  );
}
export default MovieCard;
