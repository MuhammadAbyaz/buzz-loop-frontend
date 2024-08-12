import Navbar from "./components/navbar"
import Post from "./components/post"
export default function App() {
  const posts = Array(8).fill(0)
  return <>
    <Navbar />
    <div className="flex items-center flex-col">
      {
        posts.map(() => {
          return <Post />
        })
      }
    </div>
  </>
}
