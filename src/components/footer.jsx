import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer className="bg-slate-200 p-6 md:py-12 w-full">
      <div className="text-sm flex">
        <div className="flex flex-col gap-y-2">
          <h3 className="font-semibold">Company</h3>
          <Link href="#">About Us</Link>
          <Link href="#">Our Team</Link>
        </div>
      </div>
      <p className="text-sm text-center text-gray-500">© 2024 BuzzLoop, Inc.</p>
    </footer>
  );
}
