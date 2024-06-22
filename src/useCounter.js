import React, { useState, useEffect } from "react";

function useFeatchData(url = "") {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = { method: "GET" };
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        setInterval(() => {
          setData(res.results);
          setIsLoading(false);
        }, 3000);
      });
  }, []);
  return [data, isLoading];
}
export default useFeatchData;
