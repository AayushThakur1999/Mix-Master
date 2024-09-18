import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <main className="w-full h-screen bg-stone-200">
      <Navbar />
      <section className="w-4/5 lg:w-3/4 mx-auto py-20">
        <Outlet />
      </section>
    </main>
  );
};
export default HomeLayout;
