import { createContext, useState } from "react";

const Context = createContext({
  isLogin: false,
  isLoginModal: false,
  setIsLogin: () => {},
  setIsLoginModal: () => {},
});

export const ContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);

  return (
    <Context.Provider
      value={{
        isLogin,
        isLoginModal,
        setIsLogin,
        setIsLoginModal,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
