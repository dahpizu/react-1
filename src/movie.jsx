import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function SingleMovie() {
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
  console.log(movie, "all info ");
  return (
    <div>
      <img
        className="movie-list-item-img"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt=""
      />
      <div>{movie.title}</div>
      <div>{movie.release_date}</div>
      <div>{movie.overview}</div>
    </div>
  );
}
export default SingleMovie;
