import React from "react";

import { PiNumberOneBold } from "react-icons/pi";
import { PiNumberTwoBold } from "react-icons/pi";
import { PiNumberThreeBold } from "react-icons/pi";
import { PiNumberFourBold } from "react-icons/pi";
import Navbar from "./Navbar";
import Sidebar from "./Sidbar";
import MyFavMovie from "./MyFavMovie";
import { NewRelease } from "./NewRelease";

function Home() {
  return (
    <div className="body">
      <Navbar />
      <Sidebar />
      <div className="container">
        <MyFavMovie />
        <NewRelease />
      </div>
    </div>
  );
}

export default Home;
