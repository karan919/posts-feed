import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./compoenents/feed/PostDetail";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/post/:postId" element={<PostDetail />}></Route>
    </Routes>
  );
}

export default App;
