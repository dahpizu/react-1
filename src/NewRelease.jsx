import React from "react";

export const NewRelease = (props) => {
  return (
    <div className="movie-list-container">
      <h1>New Release</h1>
      <div className="movie-list-wrapper">
        <div className="movie-list">
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
          <div className="movie-list-item">
            <img
              className="movie-list-item-img"
              src="../public/images/beast.jpg"
              alt=""
            />
            <span className="movie-list-item-title">Beast Of No Nation</span>
            <p className="movie-list-item-rate">5.2</p>
            <button className="movie-list-item-button">watch</button>
          </div>
          <div className="movie-list-item">
            <img
              className="movie-list-item-img"
              src="../public/images/titanic.avif"
              alt=""
            />
            <span className="movie-list-item-title">Titanic</span>
            <p className="movie-list-item-rate">5.2</p>
            <button className="movie-list-item-button">watch</button>
          </div>
          <div className="movie-list-item">
            <img
              className="movie-list-item-img"
              src="../public/images/tribe.jpeg"
              alt=""
            />
            <span className="movie-list-item-title">A Tribe Called Judah</span>
            <p className="movie-list-item-rate">5.2</p>
            <button className="movie-list-item-button">watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};
