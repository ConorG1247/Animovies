import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function WatchList() {
  const [watchlistData, setWatchlistData] = useState([]);
  const [movieData, setMovieData] = useState([]);

  // intial data fetch for watchlist data of user and stores in state to use later
  useEffect(() => {
    const watchlistDataFetch = async () => {
      const res = await fetch(`http://localhost:3001/movie/hullo`, {
        method: "GET"
      })
      const data = await res.json();
      setWatchlistData([data])
    };
    watchlistDataFetch();

  }, []);
  

  //http://www.omdbapi.com/?i=${arr.title}${process.env.REACT_APP_API_KEY}

  console.log(watchlistData[0]?.payload)

  return (
    <div>
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
    <div className="search-styling">
      {watchlistData[0]?.payload.map((arr, index) => {
        return (
          <div key={index} className="poster-container">
            <img className="poster-styling" src={arr.poster} alt={arr.title} />
            <div className="poster-container-overlay">
              <div className="poster-container-title">{arr.title}</div>
              <div className="poster-container-title">{arr.year}</div>
              <button className="poster-container-text" >
                Add to watchlist
              </button>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default WatchList;
