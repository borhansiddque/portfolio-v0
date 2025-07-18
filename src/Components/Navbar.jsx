import React from "react";
import { Link, NavLink } from "react-router";
import { FaBars } from "react-icons/fa6";
import ProgressBar from "./ProgressBar";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `text-base font-semibold uppercase px-4 py-1 rounded-sm text-orange-100 hover:bg-orange-700 hover:shadow-sm hover:shadow-orange-500 transition-all duration-300 border-none ${
              isActive
                ? "shadow-sm bg-linear-to-r from-orange-700 to-orange-600 text-orange-100 shadow-orange-500"
                : "bg-none"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/my-works"}
          className={({ isActive }) =>
            `text-base font-semibold uppercase px-4 py-1 rounded-sm text-orange-100 hover:bg-orange-700 hover:shadow-sm hover:shadow-orange-500 transition-all duration-300 border-none ${
              isActive
                ? "shadow-sm bg-linear-to-r from-orange-700 to-orange-600 text-orange-100 shadow-orange-500"
                : "bg-none"
            }`
          }
        >
          My Works
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/blogs"}
          className={({ isActive }) =>
            `text-base font-semibold uppercase px-4 py-1 rounded-sm text-orange-100 hover:bg-orange-700 hover:shadow-sm hover:shadow-orange-500 transition-all duration-300 border-none ${
              isActive
                ? "shadow-sm bg-linear-to-r from-orange-700 to-orange-600 text-orange-100 shadow-orange-500"
                : "bg-none"
            }`
          }
        >
          Blogs
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-black/50 sticky backdrop-blur-xl top-0 z-50">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBars size={25} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <h2>
            <Link to={"/"} className="text-3xl font-bold flex gap-0">
              BS<span className="text-orange-500">.</span>
            </Link>
          </h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8 px-1">{links}</ul>
        </div>
        {/* Download CV button */}
        <div className="navbar-end">
          <Link
            to={"/contact-me"}
            className="inline-block rounded-full px-4 py-2 text-base font-bold bg-linear-to-r from-orange-700 to-orange-600 hover:bg-orange-600 text-orange-100 shadow-none hover:shadow-sm hover:shadow-orange-500 hover:scale-95 transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
      <ProgressBar />
    </div>
  );
};

export default Navbar;
