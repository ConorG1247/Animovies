import React from "react";
import { useState } from "react";
import SearchResult from "./SearchResult/SearchResult";

function SearchBar() {
  const [movieSearchContent, setMovieSearchContent] = useState();
  const [movieData, setMovieData] = useState();

  // checks for contet in input field and if key pressed is enter, if true submits search
  const movieSearchCheck = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    movieSearchSubmit();
  };

  // checks for content in search bar on button press, if true submits search
  // makes fetch request to movie API and stores data in state for user
  const movieSearchSubmit = async () => {
    if (!movieSearchContent) {
      console.log("Please enter a movie title.");
      return;
    }

    try {
      const res = await fetch(
        `https://omdbapi.com/?s=${movieSearchContent}&apikey=923b962c`
      );
      const data = await res.json();
      if (res.ok) {
        console.log(data)
        if (data.Response === "False") {
          setMovieData([data.Error])
          return 
        }
        setMovieData(data.Search)
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(movieData)

  return (
    <>
      <div>Search Bar</div>
      <input
        type="text"
        placeholder="Movie search"
        onKeyPress={movieSearchCheck}
        onChange={(e) => setMovieSearchContent(e.target.value)}
      ></input>
      <button onClick={movieSearchSubmit}>Submit</button>
      <br/>
      <SearchResult movieData={movieData} />
    </>
  );
}

export default SearchBar;
