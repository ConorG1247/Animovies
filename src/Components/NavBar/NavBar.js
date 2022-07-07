import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function NavBar() {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/watchlist">
        <button>Watchlist</button>
      </Link>
      <SearchBar />
    </div>
  );
}

export default NavBar;
