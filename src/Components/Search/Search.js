import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchResult from "../SearchBar/SearchResult/SearchResult";
import NavBar from "../NavBar/NavBar";

function Search() {
  const [movieData, setMovieData] = useState();
  let location = useLocation();

  useEffect(() => {
    if (location.state === null) {
      return;
    }
    const searchResultData = async () => {
      const res = await fetch(
        `https://omdbapi.com/?s=${location.state}${process.env.REACT_APP_API_KEY}`
      );
      const data = await res.json();
      setMovieData(data.Search);
    };
    searchResultData();
  }, [location.state]);

  return (
    <>
      <NavBar />
      <br />
      <div className="main-container-center">
      <SearchResult movieData={movieData} />
      </div>
    </>
  );
}

export default Search;
