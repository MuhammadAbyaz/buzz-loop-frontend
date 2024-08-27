import { Post } from "../posts/post";

export function PostList({ posts }) {
  return (
    <>
      {posts?.map((post, idx) => {
        return <Post key={idx} data={post} />;
      })}
    </>
  );
}
