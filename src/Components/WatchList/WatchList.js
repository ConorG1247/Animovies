import React from "react";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import NavBar from "../NavBar/NavBar";
import { MinusIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

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
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/movie/Hullo1247`,
        {
          method: "GET",
        }
      );
      const data = await res.json();

      if (res.ok) {
        setMovieData(data.payload[0].data);
        console.log(true);
      }
    };
    initialData();
  }, []);

  // sends delete data to be used in useFetch, as well as updating state
  // causing re-render of page without retching inital data again
  const deleteMovieFromList = async (id) => {
    const body = JSON.stringify({ user: "Hullo1247", type: "movie", id: id });
    setDeleteMovieData({
      url: `https://movie-api-back.herokuapp.com/movie`,
      method: "DELETE",
      body: body,
    });
    setMovieData(movieData.filter((arr) => arr._id !== id));
  };

  return (
    <div>
      <NavBar />
      <div className="main-container-center-watchlist">
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
                  <div className="poster-button-container">
                    <IconButton
                      className="poster-container-text"
                      onClick={() => deleteMovieFromList(arr._id)}
                      size="sm"
                      bg="gray.700"
                      icon={<MinusIcon color="gray.400"/>}
                    />
                    <IconButton
                      className="poster-button"
                      size="sm"
                      bg="gray.700"
                      icon={<InfoOutlineIcon color="gray.400"/>}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WatchList;
