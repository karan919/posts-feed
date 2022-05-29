import PostDetail from "../compoenents/post/PostDetail";
import Comments from "../compoenents/post/Comments/Comments";
import UserComment from "../compoenents/post/UserComment/UserComment";

const Post = () => {
  return (
    <>
      <PostDetail />
      <UserComment />
      <Comments />
    </>
  );
};

export default Post;
