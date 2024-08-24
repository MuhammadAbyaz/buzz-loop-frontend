import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <header className="border-b-gray-100 drop-shadow-sm fixed w-full top-0 bg-white">
      <nav className="flex justify-between items-center px-4">
        <Link to="/">
          <img src="https://placehold.co/150x50" />
        </Link>
        <ul className="flex gap-x-4 mr-24">
          <Link className="hover:underline" to="/explore">
            Explore
          </Link>
          <Link className="hover:underline" to="/notifications">
            Notifications
          </Link>
          <Link className="hover:underline" to="/messages">
            Messages
          </Link>
        </ul>
        <Link to="/profile">
          <IoPersonOutline className="h-5 w-5" color="gray" />
        </Link>
      </nav>
    </header>
  );
}
