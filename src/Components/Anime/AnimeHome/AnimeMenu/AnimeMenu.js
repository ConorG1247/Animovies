import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function AnimeMenu({ changeTitle }) {
  return (
    <Menu>
      <MenuButton
        bg="gray.700"
        _hover={{ bg: "rgb(41, 46, 66)" }}
        _active={{ bg: "rgb(45, 51, 70)" }}
        color="white"
        mt={2}
        w={220}
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        Select Top Anime
      </MenuButton>
      <MenuList bg="gray.700" border="gray" color="white">
        <MenuItem
          _hover={{ bg: "rgb(41, 46, 66)" }}
          _focus={{ bg: "rgb(41, 46, 66)" }}
          value={"Top Airing Anime"}
          onClick={(e) => changeTitle(e)}
        >
          Top Airing
        </MenuItem>
        <MenuItem
          _hover={{ bg: "rgb(41, 46, 66)" }}
          value={"Top Upcoming Anime"}
          onClick={(e) => changeTitle(e)}
        >
          Top Upcoming
        </MenuItem>
        <MenuItem
          _hover={{ bg: "rgb(41, 46, 66)" }}
          value={"Top Anime Shows"}
          onClick={(e) => changeTitle(e)}
        >
          Top TVs
        </MenuItem>
        <MenuItem
          _hover={{ bg: "rgb(41, 46, 66)" }}
          value={"Top Anime Movies"}
          onClick={(e) => changeTitle(e)}
        >
          Top Movies
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default AnimeMenu;
