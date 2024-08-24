import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export function AppLayout() {
  return (
    <>
      <Navbar />
      <div className="pt-14 pb-2 mx-2">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
