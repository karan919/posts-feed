import PostDetail from "../compoenents/post/PostDetail";
import Comments from "../compoenents/post/Comments/Comments";
import UserComment from "../compoenents/post/UserComment/UserComment";

const Post = () => {
  return (
    <div className="post">
      <PostDetail />
      <UserComment />
      <Comments />
    </div>
  );
};

export default Post;
