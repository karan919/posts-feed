import { useContext } from "react";
import Comment from "../UI/Comment";
import Context from "../../common/Context";

const CommentList = (props) => {
  const context = useContext(Context);
  const userComments = context.comments;
  const { comments } = props.data;
  return (
    <>
      {userComments &&
        userComments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
};

export default CommentList;
