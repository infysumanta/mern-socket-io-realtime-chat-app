import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { ChatState } from "../../context/ChatProvider";
import SingleChat from "./SingleChat";
const ChatBox = ({ fetchAgain, setFetchAgain, socket, socketConnected }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat
        fetchAgain={fetchAgain}
        setFetchAgain={setFetchAgain}
        socket={socket}
        socketConnected={socketConnected}
      />
    </Box>
  );
};

export default ChatBox;
