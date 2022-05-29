import Comment from "../UI/Comment";

const commentList = (props) => {
  const { comments } = props.data;
  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
};

export default commentList;
