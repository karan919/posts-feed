import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Post from "./UI/Post";
import useHttp from "../common/useHttp";
import styles from "./PostDetail.module.css";

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
  return (
    <div className={`${styles.center} ${styles.mt2}`}>
      <section>{content}</section>
    </div>
  );
};

export default PostDetail;
