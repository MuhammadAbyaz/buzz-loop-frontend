import { Post } from "../components/post";
export function Home() {
  const posts = Array(10).fill(0);
  return (
    <>
      {posts.map((post, id) => {
        return <Post key={id} />;
      })}
    </>
  );
}
