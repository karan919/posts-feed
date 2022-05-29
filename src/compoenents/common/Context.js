import { createContext, useState } from "react";

const Context = createContext({
  isLogin: false,
  isLoginModal: false,
  token: "",
  comments: [],
  setIsLogin: () => {},
  setIsLoginModal: () => {},
  setToken: () => {},
  setComments: () => {},
  deleteComment: () => {},
});

export const ContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [token, setToken] = useState("");
  const [comments, setComments] = useState("");

  const deleteComment = (id) => {
    console.log("commentscomments", comments);
    if (comments.length > 0) {
      const newComment = comments.filter((item) => id !== item.id);
      console.log("newComment", newComment);
      setComments(newComment);
    }
  };

  return (
    <Context.Provider
      value={{
        isLogin,
        isLoginModal,
        token,
        comments,
        setIsLogin,
        setIsLoginModal,
        setToken,
        setComments,
        deleteComment,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
