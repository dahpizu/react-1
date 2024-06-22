import React, { useEffect, useState } from "react";

import { PiNumberOneBold } from "react-icons/pi";
import { PiNumberTwoBold } from "react-icons/pi";
import { PiNumberThreeBold } from "react-icons/pi";
import { PiNumberFourBold } from "react-icons/pi";
import Navbar from "./Navbar";
import Sidebar from "./Sidbar";
import MyFavMovie from "./MyFavMovie";
import { NewRelease } from "./NewRelease";
import useCounter from "./useCounter";
import useFeatchData from "./useCounter";
const url =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=01947fdc028668cbba608f3d08618bef&language=en-US";
function Home() {
  const [data, isLoading] = useFeatchData(url);

  return (
    <div className="body">
      <Navbar />
      <Sidebar />
      <div className="container">
        <MyFavMovie />
        <NewRelease movies={data} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default Home;
