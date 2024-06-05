import React from "react";
import { CiBellOn } from "react-icons/ci";
import { CgMenuGridO } from "react-icons/cg";
import { MdAccountCircle } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

function Movie() {
  return (
    <nav className="opt">
      <ul>
        <li>Movies</li>
        <li>Series</li>
        <li>Animation</li>
        <li>Genres</li>
      </ul>
      <div className="search">
        <IoIosSearch />

        <input type="text" className="search-input" />
      </div>
      <div className="icon">
        <CiBellOn />
        <CgMenuGridO />
        <MdAccountCircle />
      </div>
    </nav>
  );
}

export default Movie;
