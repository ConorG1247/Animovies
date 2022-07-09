import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-container-left">
        <Link to="/movie">
          <img
            className="navbar-logo"
            src="http://puu.sh/Ja7Xy/3de1287517.png"
            alt=""
          />
        </Link>
        <div className="navbar-hamburger">
      <Menu>
        <MenuButton
          as={IconButton}
          variant="ghost"
          colorScheme="whiteAlpha"
          icon={<HamburgerIcon />}
        />
        <MenuList bg="gray.800" border="gray">
          <Link to="/watchlist">
            <MenuItem
              color="whitesmoke"
              _hover={{ bg: "gray.700" }}
              _expanded={{ bg: "gray.400" }}
              _focus="gray"
            >
              Anime
            </MenuItem>
          </Link>
          <Link to="/watchlist">
            <MenuItem
              color="whitesmoke"
              _hover={{ bg: "gray.700" }}
              _expanded={{ bg: "gray.400" }}
              _focus="gray"
            >
              Watchlist
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
      </div>
        <div className="navbar-button-padding">
          <Link to="/watchlist">
            <Button variant="ghost" colorScheme="whiteAlpha" size="sm">
              Watchlist
            </Button>
          </Link>
          <Link to="/watchlist">
            <Button variant="ghost" colorScheme="whiteAlpha" size="sm">
              Anime
            </Button>
          </Link>
        </div>
      </div>
      <div className="navbar-container-right">
        <SearchBar />
      </div>
    </div>
  );
}

export default NavBar;
