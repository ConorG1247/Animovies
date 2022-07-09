import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputRightElement, InputGroup } from '@chakra-ui/react'

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
    <div className="navbar-search-padding">
    <InputGroup>
      <Input
        type="text"
        placeholder="Movie search"
        value={movieSearchContent}
        onKeyPress={movieSearchCheck}
        onChange={(e) => setMovieSearchContent(e.target.value)}
        size="sm"
        color="gray.400"
        focusBorderColor="gray"
        borderColor="gray"
      />
      <InputRightElement color="gray" pointerEvents="none" children={<SearchIcon />} />
      </InputGroup>
      </div>
    </>
  );
}

export default SearchBar;
