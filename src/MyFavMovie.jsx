import React from "react";

function MyFavMovie(props) {
  return (
    <div className="movie-list-container">
      <h1>My Favorite</h1>
      <div className="movie-list-wrapper">
        <div className="movie-list">
          <div className="movie-list-item">
            <img
              className="movie-list-item-img"
              src="../public/images/nimbe.jpeg"
              alt=""
            />
            <span className="movie-list-item-title">Nimbe</span>
            <p className="movie-list-item-rate">5.2</p>
            <button className="movie-list-item-button">watch</button>
          </div>
          <div className="movie-list-item">
            <img
              className="movie-list-item-img"
              src="../public/images/omoghetti.jpeg"
              alt=""
            />
            <span className="movie-list-item-title">Omo Ghetto</span>
            <p className="movie-list-item-rate">5.2</p>
            <button className="movie-list-item-button">watch</button>
          </div>
          <div className="movie-list-item">
            <img
              className="movie-list-item-img"
              src="../public/images/october.jpeg"
              alt=""
            />
            <span className="movie-list-item-title">October 1st</span>
            <p className="movie-list-item-rate">5.2</p>
            <button className="movie-list-item-button">watch</button>
          </div>
          <div className="movie-list-item">
            <img
              className="movie-list-item-img"
              src="../public/images/dubaibling.avif"
              alt=""
            />
            <span className="movie-list-item-title">Dubai Bling</span>
            <p className="movie-list-item-rate">5.2</p>
            <button className="movie-list-item-button">watch</button>
          </div>
        </div>
        {/* <PiNumberOneBold className="number-1" />
        <PiNumberTwoBold className="number-2" />
        <PiNumberThreeBold className="number-3" />
        <PiNumberFourBold className="number-4" /> */}
      </div>
    </div>
  );
}
export default MyFavMovie;
