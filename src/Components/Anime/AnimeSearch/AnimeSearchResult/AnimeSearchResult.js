import { useState } from "react";
import useFetch from "../../../../hooks/useFetch"
import { IconButton } from "@chakra-ui/react";
import { AddIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function AnimeSearchResult({ animeData }) {
  const [fetchContent, setFetchContent] = useState({
    url: null,
    method: null,
    body: null,
  });
  useFetch(fetchContent.url, fetchContent.method, fetchContent.body);
  let navigate = useNavigate();

  // sets data on function call to match the movie selected and passes the data
  // to be used by the useFetch hook
  const defineFetchContent = (arr) => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/update`;
    const method = "POST";
    const body = JSON.stringify({
      type: "anime",
      user: `${localStorage.getItem("guest")}`,
      title: arr.title,
      poster: arr.images.jpg.image_url,
      year: arr.year,
      id: arr.mal_id,
    });
    setFetchContent({ url: url, method: method, body: body });
    localStorage.setItem("AnimeCheck", "true")
  };

  const moreMovieInfo = (id) => {
    navigate(`/anime/page/${id}`, {
      state: id,
      replace: false,
    });
  };

  return (
    <div className="new-movies-container-poster">
      {animeData?.map((arr, index) => {
        return (
          <div key={index} className="watchlist-poster-title">
          <div onClick={() => moreMovieInfo(arr.mal_id)} className="rating-anime">⭐{arr.score}</div>
            <img
              className="new-movies-poster"
              src={arr.images.jpg.image_url}
              alt={arr.title}
              onClick={() => moreMovieInfo(arr.mal_id)}
            />
            <div className="watchlist-info-container">
              <div onClick={() => moreMovieInfo(arr.mal_id)}>
                {arr.title} ({arr.year})
              </div>
              <div className="watchlist-info-container-buttons">
                <IconButton
                  size="xs"
                  colorScheme="green"
                  bgColor="green"
                  onClick={() => defineFetchContent(arr)}
                  icon={<AddIcon color="white" />}
                />
                <IconButton
                  size="xs"
                  colorScheme="blue"
                  onClick={() => moreMovieInfo(arr.mal_id)}
                  icon={<InfoOutlineIcon color="white" />}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AnimeSearchResult;
