import React, { useState } from "react";
import { AiFillDribbbleCircle } from "react-icons/ai";

import { GoEye } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { CiStopwatch } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiFileOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div className="sidebar">
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        Hi Drawerrrr
      </Drawer>
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
