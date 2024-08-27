import { useState } from "react";
import { useEffect } from "react";
import { getPosts } from "../utils/api-calls";
import { PostList } from "../components/posts/postList";
export function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      setPosts(await getPosts());
    })();
  }, []);

  return (
    <>
      <PostList posts={posts} />
    </>
  );
}
