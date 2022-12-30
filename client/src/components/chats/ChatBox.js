import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { ChatState } from "../../context/ChatProvider";
const ChatBox = () => {
  const { selectedChat, user } = ChatState();

  return <Box display={}>Single Chat</Box>;
};

export default ChatBox;
