import { FaRegHeart } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { RiChat3Line } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa6";
import Avatar from "./avatar";

export default function Post() {
  return <div className="my-10 flex flex-col mx-80 gap-y-5 w-fit items-center border-b-gray-500">
    <Avatar />
    <div className="flex flex-col gap-x-2 items-start w-[40%]">
      <div className="flex items-center gap-x-2">
        <h1 className="font-medium">Acme Inc</h1>
        <p className="text-gray-500 text-sm">@acmeinc . 2h</p>
      </div>
      <p className="text-gray-500 line-clamp-1 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <img src="https://placehold.co/800x450" className="w-[60%] aspect-video rounded-md cursor-pointer selection:bg-emerald-700" />
    <div className="flex w-[58%] justify-between">
      <span className="flex gap-x-2">
        <button className="p-2 hover:bg-gray-100 rounded-md">
          <FaRegHeart className="size-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-md">
          <RiChat3Line className="size-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-md">
          <FiSend className="size-5" />
        </button>
      </span>
      <button className="p-2 hover:bg-gray-100 rounded-md">
        <FaRegBookmark className="size-5" />
      </button>
    </div>
    <div className="flex w-[58%] flex-col gap-y-1">
      <p className="line-clamp-1 text-sm"><strong className="font-medium">John Cena</strong>: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi ante, tristique</p>
      <p className="line-clamp-1 text-sm"><strong className="font-medium">John Cena</strong>: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi ante, tristique</p>
      <button className="h-3 w-fit text-gray-500 text-sm">View all comments</button>
    </div>
  </div>
}
