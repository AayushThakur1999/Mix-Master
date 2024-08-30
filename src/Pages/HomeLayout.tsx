import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <main className="w-full h-screen">
      <Navbar />
      <Outlet />
    </main>
  );
};
export default HomeLayout;
