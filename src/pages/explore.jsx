import { IoMdSearch } from "react-icons/io";
import { Card } from "../components/card";
export function Explore() {
  const trendingPosts = Array(10).fill(0);
  return (
    <>
      <div className="flex mb-8 w-full gap-x-2 px-2">
        <input
          className="border rounded-md flex-1 px-3"
          placeholder="Search for content..."
        />
        <button className="flex items-center bg-black text-white px-3 py-2 rounded-md">
          <IoMdSearch className="size-4 mr-2" />
          Search
        </button>
      </div>

      <div className="flex flex-col mx-2">
        <h2 className="text-2xl font-semibold mb-4">Trending Posts</h2>
        <div className="flex flex-wrap gap-x-2 gap-y-10">
          {trendingPosts.map((post, idx) => (
            <Card key={idx} />
          ))}
        </div>
      </div>
    </>
  );
}
