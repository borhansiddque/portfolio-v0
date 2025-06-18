import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="items-center p-4 flex flex-col max-w-7xl mx-auto bg-purple-950/20 backdrop-blur-xs text-purple-100 rounded-xl mb-3">
      <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row items-center justify-between w-full">
        <div className="">
          <h2>
            <Link to={"/"} className="text-2xl font-bold flex gap-0">
              BS<span className="text-purple-300">.</span>
            </Link>
          </h2>
        </div>
        <nav className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <h3>
            <a href="" className="shadow-none hover:shadow-lg hover:shadow-purple-500 transition-all duration-300">Facebook</a>
          </h3>
          <h3>
            <a href="" className="shadow-none hover:shadow-lg hover:shadow-purple-500 transition-all duration-300">Instagram</a>
          </h3>
          <h3>
            <a href="" className="shadow-none hover:shadow-lg hover:shadow-purple-500 transition-all duration-300">Linkedin</a>
          </h3>
        </nav>
      </div>
      <p className="mt-5">
        Developed By -{" "}
        <a href="" className="link text-purple-300">
          Borhan Siddque
        </a>
      </p>
    </footer>
  );
};

export default Footer;
