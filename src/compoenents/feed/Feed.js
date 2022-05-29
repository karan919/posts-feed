import { useState, useEffect, useCallback } from "react";
import PostList from "./PostList";
import styles from "./Feed.module.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFeedHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://api.realworld.io/api/articles?limit=10&offset=0"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      setPosts(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchFeedHandler();
  }, [fetchFeedHandler]);

  let content = <p>Found no articles.</p>;

  if (posts.articlesCount > 0) {
    content = <PostList data={posts} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <>
      <div className={`${styles.center} ${styles.mt2}`}>
        <section>{content}</section>
      </div>
    </>
  );
};

export default Feed;
