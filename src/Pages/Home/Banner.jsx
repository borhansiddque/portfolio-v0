import React from "react";
import bannerImage from "../../assets/git-profile.jpg";
import { FaFacebookSquare, FaLinkedin, FaReact, FaTwitterSquare, FaStackOverflow } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

const Banner = () => {
  return (
    <div className="mt-10 max-w-7xl mx-auto">
      <div
        className="p-4 rounded-lg bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0)),
          url('${bannerImage}')`,
        }}
      >
        <div className="mb-10 md:mb-20">
          <div className="flex items-center gap-2">
            <FaReact size={24} />
            <h4 className="uppercase">About Me</h4>
          </div>
          <h2 className="text-xl sm:text-3xl mt-8">
            {" "}
            <span className="text-orange-300">Hey,</span> I'm Borhan
          </h2>
          <p className="mt-4 md:hidden">I'm a MERN stack developer focused on building modern, responsive, and user-friendly web applications. I write clean, maintainable code and follow smart architectural patterns to create seamless digital experiences that are both functional and visually engaging.</p>
          <p className="sm:text-lg lg:max-w-3/4 mt-4 relative hidden md:block">
            I'm a passionate Frontend Developer with a strong focus on building modern, responsive, and user-centric web applications using React. While my core expertise lies in frontend development, I also have working knowledge of backend technologies in the MERN stack (MongoDB, Express.js, Node.js). I thrive on writing clean, efficient code and solving real-world problems through thoughtful, scalable solutions. Whether I'm building a project from scratch or enhancing an existing system, I bring creativity, attention to detail, and a problem-solving mindset to every task.
          </p>
        </div>

        <div className="bg-black/50 px-2 py-5 sm:px-5 sm:py-10 rounded-lg backdrop-blur-xs text-white sm:max-w-xl space-y-5">
          <div className="flex items-center gap-2 ">
            <TbTargetArrow size={25} />
            <h4 className="uppercase text-sm">Why I Do What I Do</h4>
          </div>
          <p className="mt-2 sm:text-lg">
            I believe that technology, when used with purpose, has the power to
            transform lives. I code not just to build websites, but to create
            solutions that are meaningful, accessible, and impactful. Every line
            of code I write is driven by curiosity, creativity, and the desire
            to make things better.
          </p>
          <div className="space-y-1">
            <div className="flex gap-2">
              <p>💡</p>
              <p>Passion for coding and problem-solving</p>
            </div>
            <div className="flex gap-2">
              <p>🚀</p>
              <p>Always learning and improving</p>
            </div>
            <div className="flex gap-2">
              <p>🌍</p>
              <p>Building apps that make a difference</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex mt-3 justify-between">
        <h5 className="drop-shadow-xl drop-shadow-orange-500">
          <a href="https://www.facebook.com/borhan.siddque.19/" target="_blank">Facebook</a>
        </h5>
        <h5 className="drop-shadow-xl drop-shadow-orange-500">
          <a href="https://www.linkedin.com/in/borhan-siddque/" target="_blank">LinkedIn</a>
        </h5>
        <h5 className="drop-shadow-xl drop-shadow-orange-500">
          <a href="https://x.com/BorhanSiddque" target="_blank">Twitter</a>
        </h5>
        <h5 className="drop-shadow-xl drop-shadow-orange-500">
          <a href="https://stackoverflow.com/users/15088606/borhan-siddque" target="_blank">Stack Overflow</a>
        </h5>
      </div>
      <div className="flex flex-row gap-2 items-center justify-between mt-5 sm:hidden">
        <h3>
          <a href="https://www.facebook.com/borhan.siddque.19/" target="_blank">
            <FaFacebookSquare size={25} className="shadow-xl shadow-orange-500 transition-all duration-300" />
          </a>
        </h3>
        <h3>
          <a href="https://www.linkedin.com/in/borhan-siddque/" target="_blank">
            <FaLinkedin size={25} className="shadow-xl shadow-orange-500 transition-all duration-300" />
          </a>
        </h3>
        <h3>
          <a href="https://x.com/BorhanSiddque" target="_blank">
            <FaTwitterSquare size={25} className="shadow-xl shadow-orange-500 transition-all duration-300" />
          </a>
        </h3>
        <h3>
          <a href="https://stackoverflow.com/users/15088606/borhan-siddque" target="_blank">
            <FaStackOverflow size={25} className="shadow-xl shadow-orange-500 transition-all duration-300" />
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Banner;
