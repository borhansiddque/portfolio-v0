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
            `text-base font-semibold uppercase px-4 py-1 rounded-md text-purple-200 hover:bg-purple-700 shadow-none hover:shadow-lg hover:shadow-purple-500 transition-all duration-300 border-none ${
              isActive ? "bg-purple-800 text-purple-200" : "bg-none"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            `text-base font-semibold uppercase px-4 py-1 rounded-md text-purple-200 hover:bg-purple-700 shadow-none hover:shadow-lg hover:shadow-purple-500 transition-all duration-300 border-none ${
              isActive ? "bg-purple-800 text-purple-200" : "bg-none"
            }`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/blogs"}
          className={({ isActive }) =>
            `text-base font-semibold uppercase px-4 py-1 rounded-md text-purple-200 hover:bg-purple-700 shadow-none hover:shadow-lg hover:shadow-purple-500 transition-all duration-300 border-none ${
              isActive ? "bg-purple-800 text-purple-200" : "bg-none"
            }`
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            `text-base font-semibold uppercase px-4 py-1 rounded-md text-purple-200 hover:bg-purple-700 shadow-none hover:shadow-lg hover:shadow-purple-500 transition-all duration-300 border-none ${
              isActive ? "bg-purple-800 text-purple-200" : "bg-none"
            }`
          }
        >
          Contact Me
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <h2>
          <Link to={'/'} className="text-xl flex gap-0">
            BS<span className="text-purple-300">.</span>
          </Link>
        </h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-6 px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/borhansiddque"
          target="_blank"
          className="px-6 md:px-8 py-2 text-base font-medium rounded-lg bg-purple-800 text-purple-200 hover:bg-purple-700 shadow-none hover:shadow-lg hover:shadow-purple-500 transition-all duration-300 border-none"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Navbar;
