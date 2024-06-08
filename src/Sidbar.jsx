import React from "react";
import { AiFillDribbbleCircle } from "react-icons/ai";

import { GoEye } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { CiStopwatch } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiFileOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
function Sidebar() {
  return (
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
  );
}

export default Sidebar;
