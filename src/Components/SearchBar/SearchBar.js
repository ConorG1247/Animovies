import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [movieSearchContent, setMovieSearchContent] = useState("");

  let navigate = useNavigate();

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
      return;
    }
    navigate(`/search/${movieSearchContent}`, {
      state: movieSearchContent,
      replace: true,
    });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Movie search"
        value={movieSearchContent}
        onKeyPress={movieSearchCheck}
        onChange={(e) => setMovieSearchContent(e.target.value)}
      ></input>
      <br />
    </>
  );
}

export default SearchBar;
