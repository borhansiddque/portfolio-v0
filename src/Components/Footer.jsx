import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaStackOverflow, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 px-5 bg-purple-950/20 backdrop-blur-xs text-purple-100">
      <div className="flex flex-col max-w-7xl mx-auto">
        <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row items-center justify-between w-full">
          <div className="">
            <h2>
              <Link to={"/"} className="text-2xl font-bold flex gap-0">
                BS<span className="text-purple-300">.</span>
              </Link>
            </h2>
          </div>
          <nav className="flex flex-col sm:flex-row gap-2 sm:gap-7">
            <h3>
              <a href="" className="drop-shadow-2xl drop-shadow-purple-500">
                <FaFacebook size={25} />
              </a>
            </h3>
            <h3>
              <a href="" className="drop-shadow-2xl  drop-shadow-purple-500">
                <FaStackOverflow size={25} />
              </a>
            </h3>
            <h3>
              <a href="" className="drop-shadow-2xl drop-shadow-purple-500">
                <FaLinkedin size={25} />
              </a>
            </h3>
          </nav>
        </div>
        <p className="mt-5 text-center text-sm">
          Developed By -{" "}
          <a
            href="https://3s-soft.com/"
            target="_blank"
            className="link text-purple-300"
          >
            3s-Soft.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
