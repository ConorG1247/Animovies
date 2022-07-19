import React from "react";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import NavBar from "../NavBar/NavBar";
import { MinusIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function WatchList() {
  const [movieData, setMovieData] = useState([]);

  const [deleteMovieData, setDeleteMovieData] = useState({
    url: null,
    method: null,
    body: null,
  });
  let navigate = useNavigate();

  useFetch(deleteMovieData.url, deleteMovieData.method, deleteMovieData.body);

  // get inital watchlist data and store it in a state
  useEffect(() => {
    if (localStorage.getItem("MovieCheck") === "empty") {
      return;
    }
    const guestUser = localStorage.getItem("guest");
    const initialData = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/movie/${guestUser}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();

      if (res.ok) {
        setMovieData(data.payload[0].data);
      }
    };
    initialData();
  }, []);

  // sends delete data to be used in useFetch, as well as updating state
  // causing re-render of page without retching inital data again
  const deleteMovieFromList = async (id) => {
    const body = JSON.stringify({
      user: `${localStorage.getItem("guest")}`,
      type: "movie",
      id: id,
    });
    setDeleteMovieData({
      url: `${process.env.REACT_APP_BACKEND_URL}/delete`,
      method: "DELETE",
      body: body,
    });
    setMovieData(movieData.filter((arr) => arr._id !== id));
  };

  const moreMovieInfo = (id) => {
    navigate(`/page/${id}`, {
      state: id,
      replace: false,
    });
  };

  if (movieData?.length === 0 || localStorage.getItem("MovieCheck") === "empty") {
    return (
      <div>
        <NavBar type="Anime"/>
        <div className="watchlist-empty-container"> 
        <div className="new-movies-title">It's looking pretty empty in here...</div>
        <p>try adding something to watch!</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <NavBar/>
      <div className="watchlist-container-poster">
        {movieData?.map((arr, index) => {
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

export default WatchList;
