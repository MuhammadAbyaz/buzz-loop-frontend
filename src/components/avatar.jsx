import { IoPersonOutline } from "react-icons/io5";

export default function Avatar() {
  return <div className="rounded-full border border-gray-300 w-fit p-2 cursor-pointer">
    <IoPersonOutline className="h-5 w-5" color="gray" />
  </div>
}
