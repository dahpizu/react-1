import React from "react";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { LuBellDot } from "react-icons/lu";
import { CgMenuGridR } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { GoEye } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { CiStopwatch } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiFileOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { PiNumberOneBold } from "react-icons/pi";
import { PiNumberTwoBold } from "react-icons/pi";
import { PiNumberThreeBold } from "react-icons/pi";
import { PiNumberFourBold } from "react-icons/pi";

function Movie() {
  return (
    <div className="body">
      <div className="navbar">
        <div className="navbar-container">
          <div className="menu-container">
            <ul className="menu-list">
              <li className="menu-list-item">Movies</li>
              <li className="menu-list-item">Series</li>
              <li className="menu-list-item">Animation</li>
              <li className="menu-list-item">Genre</li>
            </ul>
          </div>
          <div className="search-container">
            <IoMdSearch />
            <input
              type="text"
              name=""
              placeholder="search"
              className="seach-input"
            />
          </div>
          <div className="profile-container">
            <LuBellDot className="profile-icon" />
            <CgMenuGridR className="profile-icon" />
            <CgProfile className="profile-icon" />
          </div>
        </div>
      </div>
      <div className="sidebar">
        <AiFillDribbbleCircle className="logo-icon" />
        <GoEye className="sidebar-icon" />
        <CiStar className="sidebar-icon" />
        <CiStopwatch className="sidebar-icon" />
        <CiClock2 className="sidebar-icon" />
        <CiFileOn className="sidebar-icon" />
        <IoSettingsOutline className="sidebar-icon" />
        <IoIosLogOut className="sidebar-icon1" />
      </div>
      <div className="container">
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
                <span className="movie-list-item-title">
                  Beast Of No Nation
                </span>
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
                <span className="movie-list-item-title">
                  A Tribe Called Judah
                </span>
                <p className="movie-list-item-rate">5.2</p>
                <button className="movie-list-item-button">watch</button>
              </div>
            </div>
            <PiNumberOneBold className="number-1" />
            <PiNumberTwoBold className="number-2" />
            <PiNumberThreeBold className="number-3" />
            <PiNumberFourBold className="number-4" />
          </div>
        </div>
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
            <PiNumberOneBold className="number-1" />
            <PiNumberTwoBold className="number-2" />
            <PiNumberThreeBold className="number-3" />
            <PiNumberFourBold className="number-4" />
          </div>
        </div>
        <div className="movie-list-container">
          <div className="movie-list-wrapper">
            <div className="movie-list">
              <div className="movie-list-item">
                <img
                  className="movie-list-item-img"
                  src="../public/images/lagos.jpeg"
                  alt=""
                />
                <span className="movie-list-item-title">
                  The Bling Lagosians
                </span>
                <p className="movie-list-item-rate">5.2</p>
                <button className="movie-list-item-button">watch</button>
              </div>
              <div className="movie-list-item">
                <img
                  className="movie-list-item-img"
                  src="../public/images/namaste.jpeg"
                  alt=""
                />
                <span className="movie-list-item-title">Namaste Wahala</span>
                <p className="movie-list-item-rate">5.2</p>
                <button className="movie-list-item-button">watch</button>
              </div>
              <div className="movie-list-item">
                <img
                  className="movie-list-item-img"
                  src="../public/images/merrymen.jpeg"
                  alt=""
                />
                <span className="movie-list-item-title">Merry Men</span>
                <p className="movie-list-item-rate">5.2</p>
                <button className="movie-list-item-button">watch</button>
              </div>
              <div className="movie-list-item">
                <img
                  className="movie-list-item-img"
                  src="../public/images/aki-pawpaw.jpeg"
                  alt=""
                />
                <span className="movie-list-item-title">Aki & PawPaw</span>
                <p className="movie-list-item-rate">5.2</p>
                <button className="movie-list-item-button">watch</button>
              </div>
            </div>
            <PiNumberOneBold className="number-1" />
            <PiNumberTwoBold className="number-2" />
            <PiNumberThreeBold className="number-3" />
            <PiNumberFourBold className="number-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
