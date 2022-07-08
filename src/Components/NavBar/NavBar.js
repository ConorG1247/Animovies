import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-container-left">
        <Link to="/">
          <img
            className="navbar-logo"
            src="http://puu.sh/Ja7Xy/3de1287517.png"
            alt=""
          />
        </Link>
        <Link to="/watchlist">
          <button>Watchlist</button>
        </Link>
      </div>
      <div className="navbar-container-right">
      <SearchBar />
      </div>
    </div>
  );
}

export default NavBar;
