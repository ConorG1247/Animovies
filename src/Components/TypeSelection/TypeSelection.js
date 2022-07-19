import { Link } from "react-router-dom";
import { useEffect } from "react";

function TypeSelection() {

useEffect(() => {
  if (!localStorage.getItem("MovieCheck")) {
    localStorage.setItem("MovieCheck", "empty")
    localStorage.setItem("AnimeCheck", "empty")
  }
  if (localStorage.getItem("guest")) {
    return
  }
  const num = "guest" + Math.floor(Math.random() * 10000)
  localStorage.setItem("guest", num)
}, [])

  return (
    <div className="selection-container">
      <Link to="/movie">
        <div className="selection-movies">
          <img
            className="selection-movies-poster"
            src={require("../../images/MoviePosters.png")}
            alt="Movies"
          />
          <div className="selection-movies-poster-overlay">Movies</div>
        </div>
      </Link>
      <Link to="/anime">
        <div className="selection-anime">
          <img
            className="selection-anime-poster"
            src={require("../../images/AnimeMovies.png")}
            alt="Anime"
          />
          <div className="selection-anime-poster-overlay">Anime</div>
        </div>
      </Link>
    </div>
  );
}

export default TypeSelection;
