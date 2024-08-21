import { IoPersonOutline } from "react-icons/io5";
export function Navbar() {
  return (
    <header className="border border-b-gray-100 drop-shadow-2xl">
      <nav className="flex justify-between items-center px-4">
        <img src="https://placehold.co/150x50" />
        <ul className="flex gap-x-4 mr-24">
          <button className="hover:underline">Home</button>
          <button className="hover:underline">Notifications</button>
          <button className="hover:underline">Messages</button>
        </ul>
        <button>
          <IoPersonOutline className="h-5 w-5" color="gray" />
        </button>
      </nav>
    </header>
  );
}
