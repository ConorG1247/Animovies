import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";

function MoviePage() {
  const [movieData, setMovieData] = useState();
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
                  Realeased: {movieData?.Year} ⭐{movieData?.imdbRating}
                </div>
              </div>
            </div>
            <div className="movieinfo-secondary">
              <div className="movieinfo-container-secondary-header">
                <div className="movieinfo-container-header-seperate">
                  {movieData?.Genre}
                </div>
                <div className="movieinfo-container-header-seperate">
                  {movieData?.Rated} {movieData?.Language} {movieData?.Runtime}
                </div>
              </div>
              <div className="movieinfo-container-actors">
                <div className="movieinfo-container-header-seperate">
                  Directed by {movieData?.Director}
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
      <div className="movieinfo-container-header-seperate--title">Synopsis</div>
      </div>
        <div className="movieinfo-container-plot-text">{movieData?.Plot}</div>
      </div>
      </div>
    </div>
  );
}

export default MoviePage;
