import React from "react";
import { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import AnimeNavbar from "../AnimeNavbar/AnimeNavbar"
import { MinusIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function AnimeWatchlist() {
  const [animeData, setAnimeData] = useState([]);

  const [deleteAnimeData, setDeleteAnimeData] = useState({
    url: null,
    method: null,
    body: null,
  });
  
  let navigate = useNavigate();

  useFetch(deleteAnimeData.url, deleteAnimeData.method, deleteAnimeData.body);

  // get inital watchlist data and store it in a state
  useEffect(() => {
    if (localStorage.getItem("AnimeCheck") === "empty") {
      return;
    }
    const guestUser = localStorage.getItem("guest");
    const initialData = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/anime/${guestUser}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();

      if (res.ok) {
        setAnimeData(data.payload[0].data);
      }
    };
    initialData();
  }, []);

  // sends delete data to be used in useFetch, as well as updating state
  // causing re-render of page without retching inital data again
  const deleteMovieFromList = async (id) => {
    const body = JSON.stringify({
      user: `${localStorage.getItem("guest")}`,
      type: "anime",
      id: id,
    });
    setDeleteAnimeData({
      url: `${process.env.REACT_APP_BACKEND_URL}/delete`,
      method: "DELETE",
      body: body,
    });
    setAnimeData(animeData.filter((arr) => arr._id !== id));
  };

  const moreMovieInfo = (id) => {
    navigate(`/anime/page/${id}`, {
      state: id,
      replace: false,
    });
  };

  if (animeData?.length === 0 || localStorage.getItem("AnimeCheck") === "empty") {
    return (
      <div>
        <AnimeNavbar type="Movies"/>
        <div className="watchlist-empty-container"> 
        <div className="new-movies-title">It's looking pretty empty in here...</div>
        <p>try adding something to watch!</p>
        </div>
      </div>
    );
  }
  return ( 
    <div>
      <AnimeNavbar type="Movies"/>
      <div className="watchlist-container-poster">
        {animeData?.map((arr, index) => {
          return (
            <div key={index} className="watchlist-poster-title">
              <img
                className="new-movies-poster"
                src={arr.poster}
                alt={arr.title}
                onClick={() => moreMovieInfo(arr.id)}
              />
              <div className="watchlist-info-container">
                <div onClick={() => moreMovieInfo(arr.id)}>
                  {arr.title} ({arr.year})
                </div>
                <div className="watchlist-info-container-buttons">
                  <IconButton
                    size="xs"
                    colorScheme="red"
                    bgColor="red.700"
                    onClick={() => deleteMovieFromList(arr._id)}
                    icon={<MinusIcon color="white" />}
                  />
                  <IconButton
                    size="xs"
                    colorScheme="blue"
                    onClick={() => moreMovieInfo(arr.id)}
                    icon={<InfoOutlineIcon color="white" />}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AnimeWatchlist;
