// import React from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function ChatPage() {
  const [chats, setChats] = useState([])
  const fetchChat = async () => {
    try {
      const { data } = await axios.get("/api/chat");
      setChats(data); // Log the data from the response
    } catch (error) {
      console.error("Error fetching chat data:", error);
    }
  };
  useEffect(() => {
    fetchChat();
  }, []);
  return <div>{chats.map(chat =>(
<div key={chat._id}>{chat.chatName}</div>
))}</div>;
}
