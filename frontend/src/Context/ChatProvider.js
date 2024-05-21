import { useHistory } from "react-router-dom";

import React, { createContext, useContext, useEffect, useState } from "react";

const ChatContext = createContext();
const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [selectedChat,setSelectedChat] = useState();
  const [chats, setChats] = useState();
  const history = useHistory();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    if (!userInfo) {
      history.push("/");
    }
  }, [history]);
  return (
    <ChatContext.Provider
      value={{ user, setUser, chats, setChats, selectedChat, setSelectedChat }}
    >
      {children}
    </ChatContext.Provider>
  );
};
export const ChatState = () => {
  return useContext(ChatContext);
};
export default ChatProvider;
