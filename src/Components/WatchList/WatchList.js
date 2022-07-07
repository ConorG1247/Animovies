import React from "react";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import NavBar from "../NavBar/NavBar";

function WatchList() {
  const [movieData, setMovieData] = useState();
  const [deleteMovieData, setDeleteMovieData] = useState({
    url: null,
    method: null,
    body: null,
  });

  useFetch(deleteMovieData.url, deleteMovieData.method, deleteMovieData.body);

  // get inital watchlist data and store it in a state
  useEffect(() => {
    const initialData = async () => {
      const res = await fetch(`http://localhost:3001/movie/Hullo1247`, {method: "GET"})
      const data = await res.json()

      if (res.ok) {
        setMovieData(data.payload[0].data)
        console.log(true)
      }
    }
    initialData();
  }, [])

  // sends delete data to be used in useFetch, as well as updating state
  // causing re-render of page without retching inital data again
  const deleteMovieFromList = async (id) => {
    const body = JSON.stringify({ user: "Hullo1247", type: "movie", id: id });
    setDeleteMovieData({
      url: `http://localhost:3001/movie`,
      method: "DELETE",
      body: body,
    })
    setMovieData(movieData.filter((arr) => arr._id !== id))
  };

  return (
    <div>
    <NavBar />
      <div className="search-styling">
        {movieData?.map((arr, index) => {
          return (
            <div key={index} className="poster-container">
              <img
                className="poster-styling"
                src={arr.poster}
                alt={arr.title}
              />
              <div className="poster-container-overlay">
                <div className="poster-container-title">{arr.title}</div>
                <div className="poster-container-title">{arr.year}</div>
                <button
                  className="poster-container-text"
                  onClick={() => deleteMovieFromList(arr._id)}
                >
                  Delete from list
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
