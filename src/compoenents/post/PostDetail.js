import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import Post from "./UI/Post";
import styles from "./PostDetail.module.css";

const PostDetail = () => {
  const { postId } = useParams();
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
      setPost(data.article);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [postId]);

  useEffect(() => {
    fetchPostHandler();
  }, [fetchPostHandler]);

  let content = <p>Found no post.</p>;

  if (post.slug) {
    content = <Post article={post} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <div className={`${styles.center} ${styles.mt2}`}>
      <section>{content}</section>
    </div>
  );
};

export default PostDetail;
