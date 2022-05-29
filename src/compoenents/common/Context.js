import { createContext, useState } from "react";

const Context = createContext({
  isLogin: false,
  isLoginModal: true,
  token:"",
  setIsLogin: () => {},
  setIsLoginModal: () => {},
  setToken: () => {},
});

export const ContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(true);
  const [token, setToken] = useState("");

  return (
    <Context.Provider
      value={{
        isLogin,
        isLoginModal,
        token,
        setIsLogin,
        setIsLoginModal,
        setToken,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
