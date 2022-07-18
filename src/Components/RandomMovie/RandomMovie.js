import NavBar from "../NavBar/NavBar";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import { popularMovies, topMovies } from "../../libs/data";
import { Button } from "@chakra-ui/react";
import { AddIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function RandomMovie() {
  const [randomData, setRandomData] = useState();
  const [fetchContent, setFetchContent] = useState({
    url: null,
    method: null,
    body: null,
  });
    useFetch(fetchContent.url, fetchContent.method, fetchContent.body);
  const navigate = useNavigate();

  const defineFetchContent = (arr) => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/movie`;
    const method = "POST";
    const body = JSON.stringify({
      type: "movie",
      user: `${localStorage.getItem("guest")}`,
      title: arr.title,
      poster: arr.image,
      year: arr.year,
      id: arr.id,
    });
    setFetchContent({ url: url, method: method, body: body });
    localStorage.setItem("check", true)
  };

  const randomHighest = () => {
    const number = Math.floor(Math.random() * 250)

    setRandomData(topMovies.items[number])
  }

  const randomPopular = () => {
    const number = Math.floor(Math.random() * 99)

    setRandomData(popularMovies.items[number])
  }

  const moreMovieInfo = (id) => {
    navigate(`/page/${id}`, {
      state: id,
      replace: true,
    });
  };

  return (
    <div>
      <NavBar />
      <div className="random-container">
        <div className="random-header">
          <div className="new-movies-title">Looking for a random movie?</div>
          <div>Try one of these!</div>
          <div className="random-main">
            <Button
              variant="solid"
              colorScheme="blue"
              color="white"
              size="sm"
              onClick={() => randomHighest()}
            >
              Highest Rated
            </Button>
            <Button
              variant="solid"
              colorScheme="green"
              color="white"
              size="sm"
              onClick={() => randomPopular()}
            >
              Popular
            </Button>
          </div>
         {randomData && <div className="random-poster-title">
              <img
                className="random-poster"
                src={randomData?.image}
                alt={randomData?.title}
                onClick={() => moreMovieInfo(randomData?.id)}
              />
              <div className="watchlist-info-container">
                <div onClick={() => moreMovieInfo(randomData?.id)}>
                  {randomData?.fullTitle} ⭐{randomData?.imDbRating}
                </div>
                <div className="watchlist-info-container-buttons">
                  <IconButton
                    size="xs"
                    colorScheme="green"
                    bgColor="green"
                    onClick={() => defineFetchContent(randomData)}
                    icon={<AddIcon color="white" />}
                  />
                  <IconButton
                    size="xs"
                    colorScheme="blue"
                    onClick={() => moreMovieInfo(randomData?.id)}
                    icon={<InfoOutlineIcon color="white" />}
                  />
                </div>
              </div>
            </div>}
        </div>
      </div>
    </div>
  );
}

export default RandomMovie;
