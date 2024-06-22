import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidbar";

function SingleMovie(props) {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const options = { method: "GET" };
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=01947fdc028668cbba608f3d08618bef&language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setMovie(res));
  }, []);
  return (
    <div className="body">
      <Navbar />
      <Sidebar />
      <div className="container">
        <div className="movie-listt">
          <div className="movie-list-itemm">
            <img
              className="movie-list-item-imgg"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt=""
            />
            <div className="movie-list-item-titlee">{movie.title}</div>
            <div className="movie-list-item-release-date">
              {movie.release_date}
            </div>
            <div className="movie-list-item-overview">{movie.overview}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleMovie;
