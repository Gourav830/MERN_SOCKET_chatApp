import { Box, Button, Tooltip } from "@chakra-ui/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function SideDrawer() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();
  return (
    <>
      <Box>
        <Tooltip
          label="Search user to chat"
          hasArrow
          placement="bottom-end"
        >
          <Button varient="ghost"></Button>
        </Tooltip>
      </Box>
    </>
  );
}
export default SideDrawer;
