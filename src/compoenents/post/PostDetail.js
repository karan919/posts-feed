import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Post from "./UI/Post";
import useHttp from "../common/useHttp";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const { isLoading, error, sendRequest: sendPostsRequest } = useHttp();

  useEffect(() => {
    sendPostsRequest(
      { url: `https://api.realworld.io/api/articles/${postId}` },
      setPost
    );
  }, [sendPostsRequest, postId]);

  let content = <p>Found no post.</p>;

  if (post.article) {
    content = <Post article={post.article} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return <>{content}</>;
};

export default PostDetail;
