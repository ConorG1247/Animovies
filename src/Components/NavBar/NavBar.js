import React from "react";
import SearchBar from "../SearchBar/SearchBar";
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
            onClick={() => navigate(`/movie`)}
            className="navbar-logo"
            src={require("../../images/animovies.png")}
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
              onClick={() => navigate(`/watchlist`)}
              color="whitesmoke"
              _hover={{ bg: "gray.700" }}
              _expanded={{ bg: "gray.400" }}
              _focus={{bg: "gray.700"}}
            >
              Anime
            </MenuItem>
            <MenuItem
              onClick={() => navigate(`/watchlist`)}
              color="whitesmoke"
              _hover={{ bg: "gray.700" }}
              _expanded={{ bg: "gray.400" }}
              _focus={{bg: "gray.700"}}
            >
              Watchlist
            </MenuItem>
            <MenuItem
              onClick={() => navigate(`/random`)}
              color="whitesmoke"
              _hover={{ bg: "gray.700" }}
              _expanded={{ bg: "gray.400" }}
              _focus={{bg: "gray.700"}}
            >
              Random
            </MenuItem>
        </MenuList>
      </Menu>
      </div>
        <div className="navbar-button-padding">
            <Button onClick={() => navigate(`/watchlist`)} variant="ghost" colorScheme="whiteAlpha" color="white" size="sm">
              Anime
            </Button>
            <Button onClick={() => navigate(`/watchlist`)} variant="ghost" colorScheme="whiteAlpha" color="white" size="sm">
              Watchlist
            </Button>
            <Button onClick={() => navigate(`/random`)} variant="ghost" colorScheme="whiteAlpha" color="white" size="sm">
              Random
            </Button>
        </div>
      </div>
      <div className="navbar-container-right">
        <SearchBar />
      </div>
    </div>
  );
}

export default NavBar;
