import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";

export function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
