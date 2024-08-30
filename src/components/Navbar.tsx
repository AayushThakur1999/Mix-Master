import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }): string =>
    `pt-4 sm:pt-0 sm:px-4 md:text-lg ${isActive ? "text-green-600" : "hover:text-emerald-500"}`;

  return (
    <nav className="w-full bg-emerald-50 shadow-md">
      <div className="w-4/5 lg:w-3/4 mx-auto py-6 flex flex-col sm:flex-row justify-between items-start  sm:items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-emerald-500">
          MixMaster
        </h1>
        <div className="flex flex-col sm:flex-row items-start sm:items-center mt-4 sm:mt-0">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/newsletter" className={navLinkClass}>
            Newsletter
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
