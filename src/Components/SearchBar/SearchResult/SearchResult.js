import { useState } from "react";
import useFetch from "../../../hooks/useFetch"


function SearchResult({ movieData }) {
  const [fetchContent, setFetchContent] = useState({url: null, method: null, body: null});
  useFetch(fetchContent.url, fetchContent.method, fetchContent.body)

  const defineFetchContent = (arr) => {
    const url = `http://localhost:3001/movie`
    const method = "POST"
    const body = JSON.stringify({
      type: "movie",
      user: "Hullo1247",
      title: arr.Title,
      poster: arr.Poster,
      year: arr.Year,
      id: arr.imdbID
    })
    setFetchContent({url: url, method: method, body: body})
  }

  return (
    <div className="search-styling"> 
      {movieData?.map((arr, index) => {
        if (
          arr === "Movie not found!" ||
          arr === "Please enter a movie title."
        ) {
          return <div key={index}>{arr}</div>;
        }
        return (
          <div key={index} className="poster-container">
            <img className="poster-styling" src={arr.Poster} alt={arr.Title} />
            <div className="poster-container-overlay">
              <div className="poster-container-title">{arr.Title}</div>
              <div className="poster-container-title">{arr.Year}</div>
              <button
                className="poster-container-text"
                onClick={() => defineFetchContent(arr) }
              >
                Add to watchlist
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResult;
