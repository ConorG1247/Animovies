import React from "react";
import AnimeSearchBar from "../../Anime/AnimeSearch/AnimeSearchbar/AnimeSearchbar"
import { HamburgerIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

function NavBar() {
  let navigate = useNavigate();
  return (
    <div className="navbar-container">
      <div className="navbar-container-left">
          <img
            onClick={() => navigate(`/anime`)}
            className="navbar-logo"
            src={require("../../../images/animovies.png")}
            alt=""
            style={{cursor: "pointer"}}
          />
        <div className="navbar-hamburger">
      <Menu>
        <MenuButton
          as={IconButton}
          variant="ghost"
          colorScheme="whiteAlpha"
          color="white"
          icon={<HamburgerIcon />}
        />
        <MenuList bg="gray.800" border="gray">
            <MenuItem
              onClick={() => navigate(`/anime/watchlist`)}
              color="whitesmoke"
              _hover={{ bg: "gray.700" }}
              _expanded={{ bg: "gray.400" }}
              _focus={{bg: "gray.700"}}
            >
              Watchlist
            </MenuItem>
            <MenuItem
              onClick={() => navigate(`/anime/random`)}
              color="whitesmoke"
              _hover={{ bg: "gray.700" }}
              _expanded={{ bg: "gray.400" }}
              _focus={{bg: "gray.700"}}
            >
              Random
            </MenuItem>
            <MenuItem
              onClick={() => navigate(`/movie`)}
              color="whitesmoke"
              _hover={{ bg: "gray.700" }}
              _expanded={{ bg: "gray.400" }}
              _focus={{bg: "gray.700"}}
            >
              Movies
            </MenuItem>
        </MenuList>
      </Menu>
      </div>
        <div className="navbar-button-padding">
            <Button onClick={() => navigate(`/anime/watchlist`)} variant="ghost" colorScheme="whiteAlpha" color="white" size="sm">
              Watchlist
            </Button>
            <Button onClick={() => navigate(`/anime/random`)} variant="ghost" colorScheme="whiteAlpha" color="white" size="sm">
              Random
            </Button>
            <Button onClick={() => navigate(`/movie`)} variant="ghost" colorScheme="whiteAlpha" color="white" size="sm">
              Movies
            </Button>
        </div>
      </div>
      <div className="navbar-container-right">
        <AnimeSearchBar />
      </div>
    </div>
  );
}

export default NavBar;
