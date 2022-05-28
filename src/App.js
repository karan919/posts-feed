import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./compoenents/Navbar";
import Post from "./pages/Post";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post/:postId" element={<Post />}></Route>
      </Routes>
    </>
  );
}

export default App;
