import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../common/useHttp";
import CommentList from "./CommentList";

const Comments = () => {
  const { postId } = useParams();
  const [commentList, setComments] = useState([]);
  const { isLoading, error, sendRequest: sendCommentsRequest } = useHttp();

  useEffect(() => {
    sendCommentsRequest(
      { url: `https://api.realworld.io/api/articles/${postId}/comments` },
      setComments
    );
  }, [sendCommentsRequest, postId]);

  let content = <p>Found no comments.</p>;

  if (commentList.comments) {
    content = <CommentList data={commentList} postId={postId} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <div className="center">
      <section>{content}</section>
    </div>
  );
};

export default Comments;
