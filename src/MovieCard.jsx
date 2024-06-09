import React from "react";
import { Link } from "react-router-dom";

function MovieCard(props) {
  // props=>movie => movie ={title:"", id:"", rate:""}
  //https://image.tmdb.org/t/p/original
  return (
    <div>
      <Link to={`/movie/${props.movie.id}`}>
        <div className="movie-list-item">
          <img
            className="movie-list-item-img"
            src={`https://image.tmdb.org/t/p/original${props.movie.backdrop_path}`}
            alt=""
          />
          <span className="movie-list-item-title">{props.movie.title}</span>
          <p className="movie-list-item-rate">{props.movie.rate}</p>
          <button className="movie-list-item-button">watch</button>
        </div>
      </Link>
    </div>
  );
}
export default MovieCard;
