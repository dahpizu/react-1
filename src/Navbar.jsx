import React from "react";
import { IoMdSearch } from "react-icons/io";
import { LuBellDot } from "react-icons/lu";
import { CgMenuGridR } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
function Navbar() {
  return (
    <>
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
    </>
  );
}

export default Navbar;
