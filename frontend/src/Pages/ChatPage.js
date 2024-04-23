import { Box } from "@chakra-ui/react";
import { ChatState } from "../Contex/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";

export default function ChatPage() {
  const { user } = ChatState();
  return <div style={{width:"100%"}}>
    {user && <SideDrawer/>}
  <Box>
    {/* {user && <MyChats/>} */}
    {/* {user && <ChatBox/>} */}
  </Box>
  </div>;
}
