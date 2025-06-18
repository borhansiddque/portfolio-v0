import React from "react";
import logo from "./assets/unnamed.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-5">
      <div className="">
        <a href="https://github.com/borhansiddque" target="_blank">
          <img src={logo} alt="" className="h-10 drop-shadow-gray-200 drop-shadow-md" />
        </a>
      </div>
      <ul className="flex gap-5">
        <li>Home</li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <div className="">
        <button className="btn">Github</button>
      </div>
    </div>
  );
};

export default Navbar;
