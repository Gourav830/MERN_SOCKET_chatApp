import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  TabList,
  Tab,
  Tabs,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Authentications/Login";
import SignUp from "../components/Authentications/SignUp";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export default function HomePage() {
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if(user)history.push('/chats');
  },[history]);
  return (
    <Container maxW="x1 centerContent">
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0 "
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4x1" fontFamily="Work sans" color={"blue"}>
          Talk-A-Tive
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded">
          <TabList mb={"1em"}>
            <Tab width="50%"> Log In</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}
