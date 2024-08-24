import { FaRegHeart } from "react-icons/fa6";
import { RiChat3Line } from "react-icons/ri";

export function Card() {
  return (
    <div className="flex flex-col border p-3 w-fit gap-y-2 rounded-md">
      <img
        src="https://placehold.co/200x200"
        className="aspect-square rounded-md"
      />
      <h1 className="font-medium">Abyaz</h1>
      <div className="flex justify-between">
        <span className="flex gap-x-1 items-center">
          <FaRegHeart className="size-4 text-gray-500" />
          <p className="text-sm text-gray-500">12334</p>
        </span>
        <span className="flex gap-x-1 items-center">
          <RiChat3Line className="size-4 text-gray-500" />
          <p className="text-sm text-gray-500">43</p>
        </span>
      </div>
    </div>
  );
}
