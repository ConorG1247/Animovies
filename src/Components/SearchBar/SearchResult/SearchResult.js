import React from "react";

function SearchResult({ movieData }) {
  return (
    <div className="search-styling">
      {movieData?.map((arr, index) => {
        if (arr === "Movie not found!") {
          return <div key={index}>{arr}</div>;
        }
        return (
          <div key={index} className="poster-container">
            <img className="poster-styling" src={arr.Poster} alt={arr.Title} />
            <div className="poster-container-overlay">
              <div className="poster-container-title">{arr.Title}</div>
              <div className="poster-container-title">{arr.Year}</div>
              <button className="poster-container-text">
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
