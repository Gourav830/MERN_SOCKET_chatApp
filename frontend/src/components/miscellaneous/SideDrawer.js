import { Box, Button, Tooltip, Text, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { BellIcon,ChevronDownIcon } from "@chakra-ui/icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function SideDrawer() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();
  return (
    <>
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip label="Search user to chat" hasArrow placement="bottom-end">
          <Button variant="ghost">
            <i className="fas fa-search"></i>
            <Text d={{ base: "none", md: "flex" }} px="4">
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontFamily="2x1" fontFamily="Work sans">
          ChatApp
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}><BellIcon fontSize="2x1" m={1} /></MenuButton>
{/* <MenuList></MenuList> */}
          </Menu>
        </div>
      </Box>
    </>
  );
}
export default SideDrawer;
