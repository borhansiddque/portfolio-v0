import React from "react";
import { Link, NavLink } from "react-router";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `text-base font-semibold uppercase px-4 py-1 rounded-md text-orange-200 hover:bg-orange-700 shadow-none hover:shadow-lg hover:shadow-orange-500 transition-all duration-300 border-none ${
              isActive ? "bg-orange-800 text-orange-200" : "bg-none"
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
            `text-base font-semibold uppercase px-4 py-1 rounded-md text-orange-200 hover:bg-orange-700 shadow-none hover:shadow-lg hover:shadow-orange-500 transition-all duration-300 border-none ${
              isActive ? "bg-orange-800 text-orange-200" : "bg-none"
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
            `text-base font-semibold uppercase px-4 py-1 rounded-md text-orange-200 hover:bg-orange-700 shadow-none hover:shadow-lg hover:shadow-orange-500 transition-all duration-300 border-none ${
              isActive ? "bg-orange-800 text-orange-200" : "bg-none"
            }`
          }
        >
          Blogs
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars size={25} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <h2>
          <Link to={"/"} className="text-2xl font-bold flex gap-0">
            BS<span className="text-orange-500">.</span>
          </Link>
        </h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 px-1">{links}</ul>
      </div>
      {/* Download CV button */}
      <div className="navbar-end">
        <Link
          to={'/contact-me'}
          className="inline-block rounded-full px-4 py-2 text-sm font-bold bg-orange-800 text-orange-200 hover:bg-orange-700 shadow-none hover:shadow-lg hover:shadow-orange-500 transition-all duration-300"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
