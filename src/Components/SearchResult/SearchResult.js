import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { IconButton } from "@chakra-ui/react";
import { AddIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function SearchResult({ movieData }) {
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
    const url = `${process.env.REACT_APP_BACKEND_URL}/movie`;
    const method = "POST";
    const body = JSON.stringify({
      type: "movie",
      user: `${localStorage.getItem("guest")}`,
      title: arr.Title,
      poster: arr.Poster,
      year: arr.Year,
      id: arr.imdbID,
    });
    setFetchContent({ url: url, method: method, body: body });
    localStorage.setItem("check", true)
  };

  const moreMovieInfo = (id) => {
    navigate(`/page/${id}`, {
      state: id,
      replace: true,
    });
  };

  return (
    <div className="new-movies-container-poster">
      {movieData?.map((arr, index) => {
        return (
          <div key={index} className="watchlist-poster-title">
            <img
              className="new-movies-poster"
              src={arr.Poster}
              alt={arr.Title}
              onClick={() => moreMovieInfo(arr.imdbID)}
            />
            <div className="watchlist-info-container">
              <div>
                {arr.Title} ({arr.Year})
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
                  onClick={() => moreMovieInfo(arr.imdbID)}
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

export default SearchResult;
