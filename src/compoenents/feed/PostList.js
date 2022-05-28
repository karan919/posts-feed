import Post from "./UI/Post";

const PostList = (props) => {
  const { articles } = props.data;
  return (
    <>
      {articles.map((article) => (
        <Post key={article.slug} article={article} />
      ))}
    </>
  );
};

export default PostList;
