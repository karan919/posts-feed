import { useState, useEffect } from "react";
import PostList from "./PostList";
import useHttp from "../common/useHttp";
import styles from "./Feed.module.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const { isLoading, error, sendRequest: sendPostsRequest } = useHttp();

  useEffect(() => {
    sendPostsRequest(
      { url: "https://api.realworld.io/api/articles?limit=10&offset=0" },
      setPosts
    );
  }, [sendPostsRequest]);

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
