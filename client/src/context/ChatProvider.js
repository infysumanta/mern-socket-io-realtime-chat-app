import { createContext, useContext, useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();

  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("mern-chat-userinfo"));
    setUser(userInfo);

    if (!userInfo) {
      history.push("/");
    }
  }, [history]);

  return (
    <>
      <ChatContext.Provider value={{ user, setUser }}>
        {children}
      </ChatContext.Provider>
    </>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
