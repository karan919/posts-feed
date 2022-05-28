import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

const PostDetail = () => {
  const { postId } = useParams();
  console.log(postId);
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPostHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.realworld.io/api/articles/${postId}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(data);
      setPost(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPostHandler();
  }, [fetchPostHandler]);

  let content = <p>Found no post.</p>;

  if (post.article) {
    content = "kk";
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return <h1>{content}</h1>;
};

export default PostDetail;
