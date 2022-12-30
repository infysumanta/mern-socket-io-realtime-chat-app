import React, { useEffect, useState } from "react";
import { ChatState } from "../context/ChatProvider";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../components/layouts/SideDrawer";
import MyChats from "../components/chats/MyChats";
import ChatBox from "../components/chats/ChatBox";
import io from "socket.io-client";
const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  const [socketConnected, setSocketConnected] = useState(false);
  let socket = io();
  useEffect(() => {
    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));
  }, [user]);
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {socketConnected && (
          <>
            {user && <MyChats fetchAgain={fetchAgain} />}
            {user && (
              <ChatBox
                fetchAgain={fetchAgain}
                setFetchAgain={setFetchAgain}
                socket={socket}
                socketConnected={socketConnected}
              />
            )}
          </>
        )}
      </Box>
    </div>
  );
};

export default ChatPage;
