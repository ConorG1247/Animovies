import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import useFetch from "../../hooks/useFetch"
import NavBar from "../NavBar/NavBar";

function MoviePage() {
  const [movieData, setMovieData] = useState();
  const [fetchContent, setFetchContent] = useState({
    url: null,
    method: null,
    body: null,
  });
  useFetch(fetchContent.url, fetchContent.method, fetchContent.body);
  let location = useLocation();

  useEffect(() => {
    if (location.state === null) {
      return;
    }
    const searchResultData = async () => {
      const res = await fetch(
        `https://omdbapi.com/?i=${location.state}${process.env.REACT_APP_API_KEY}`
      );
      const data = await res.json();
      setMovieData(data);
    };
    searchResultData();
  }, [location.state]);
  
  const defineFetchContent = () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/update`;
    const method = "POST";
    const body = JSON.stringify({
      type: "movie",
      user: `${localStorage.getItem("guest")}`,
      title: movieData.Title,
      poster: movieData.Poster,
      year: movieData.Year,
      id: movieData.imdbID,
    });
    setFetchContent({ url: url, method: method, body: body });
    localStorage.setItem("check", "full")
  };

  return (
    <div>
      <NavBar />
      <div className="movieinfo">
        <div className="movieinfo-container">
          <div className="movieinfo-container-poster">
            <img
              className="movieinfo-container-poster-style"
              src={movieData?.Poster}
              alt={movieData?.Title}
            />
          </div>
          <div className="movieinfo-main-header">
            <div>
              <div className="movieinfo-container-header">
                <div className="movieinfo-container-header-seperate--title">
                  {movieData?.Title}
                </div>
                <div className="movieinfo-container-header-seperate">
                  Released: {movieData?.Year} ⭐{movieData?.imdbRating}
                </div>
              </div>
            </div>
            <div className="movieinfo-secondary">
              <div className="movieinfo-container-secondary-header">
                <div className="movieinfo-container-header-seperate">
                  Genre: {movieData?.Genre}
                </div>
                <div className="movieinfo-container-header-ratings">
                  <div className="movieinfo-container-header-seperate">
                    Rated: {movieData?.Rated}
                  </div>
                  <div className="movieinfo-container-header-seperate">
                    Language: {movieData?.Language}
                  </div>
                  <div className="movieinfo-container-header-seperate">
                    Length: {movieData?.Runtime}
                  </div>
                </div>
              </div>
              <div className="movieinfo-container-actors">
                <div className="movieinfo-container-header-seperate">
                  Director: {movieData?.Director}
                </div>
                <div className="movieinfo-container-header-seperate">
                  Actors: {movieData?.Actors}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="movieinfo-container-plot">
          <div className="movieinfo-container-plot-text">
            <Button
              onClick={() => defineFetchContent()}
              bg="blue.800"
              _hover={{ backgroundColor: "blue.600" }}
              _active={{ backgroundColor: "blue.500" }}
              color="white"
            >
              Add to watchlist
            </Button>
            <div className="movieinfo-container-header-seperate--title-syn">
              Synopsis
            </div>
          </div>
          <div className="movieinfo-container-plot-text">{movieData?.Plot}</div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
