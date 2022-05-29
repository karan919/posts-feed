import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./compoenents/Navbar";
import Post from "./pages/Post";
import { ContextProvider } from "./compoenents/common/Context";
import Login from "./compoenents/Login/Login";
import "./App.css";

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post/:postId" element={<Post />}></Route>
      </Routes>
      <Login />
    </ContextProvider>
  );
}

export default App;
