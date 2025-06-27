import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaStackOverflow, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-10 pb-5 px-5 bg-orange-950/20 backdrop-blur-xs text-orange-100">
      <div className="flex flex-col max-w-7xl mx-auto">
        <div className="flex gap-5 flex-row items-center justify-between w-full">
          <div className="">
            <h2>
              <Link to={"/"} className="text-3xl font-bold flex gap-0">
                BS<span className="text-orange-500">.</span>
              </Link>
            </h2>
          </div>
          <nav className="flex sm:flex-row gap-7">
            <h3>
              <a href="" className="drop-shadow-2xl drop-shadow-orange-500">
                <FaFacebook size={25} />
              </a>
            </h3>
            <h3>
              <a href="" className="drop-shadow-2xl  drop-shadow-orange-500">
                <FaStackOverflow size={25} />
              </a>
            </h3>
            <h3>
              <a href="" className="drop-shadow-2xl drop-shadow-orange-500">
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
            className="link text-orange-300"
          >
            Borhan Siddque.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
