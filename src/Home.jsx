import React, { useEffect, useState } from "react";

import { PiNumberOneBold } from "react-icons/pi";
import { PiNumberTwoBold } from "react-icons/pi";
import { PiNumberThreeBold } from "react-icons/pi";
import { PiNumberFourBold } from "react-icons/pi";
import Navbar from "./Navbar";
import Sidebar from "./Sidbar";
import MyFavMovie from "./MyFavMovie";
import { NewRelease } from "./NewRelease";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const options = { method: "GET" };
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=01947fdc028668cbba608f3d08618bef&language=en-US",
      options
    )
      .then((res) => res.json())
      .then((res) => setData(res.results));
  }, []);
  return (
    <div className="body">
      <Navbar />
      <Sidebar />
      <div className="container">
        <MyFavMovie />
        <NewRelease movies={data} />
      </div>
    </div>
  );
}

export default Home;
