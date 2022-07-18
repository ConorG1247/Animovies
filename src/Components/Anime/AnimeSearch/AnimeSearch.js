import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import AnimeSearchResult from "../AnimeSearch/AnimeSearchResult/AnimeSearchResult"
import AnimeNavbar from "../AnimeNavbar/AnimeNavbar"

function Search() {
  const [animeData, setAnimeData] = useState();
  let location = useLocation();

  useEffect(() => {
    if (location.state === null) {
      return;
    }
    const searchResultData = async () => {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=${location.state}&type=tv&order_by=rank&sort=asc/&limit=10/&min_score=1/&sfw=true`
      );
      const data = await res.json();
      setAnimeData(data.data);
    };
    searchResultData();
  }, [location.state]);

  return (
    <>
      <AnimeNavbar />
      <br />
      <div className="main-container-center">
      <AnimeSearchResult animeData={animeData} />
      </div>
    </>
  );
}

export default Search;
