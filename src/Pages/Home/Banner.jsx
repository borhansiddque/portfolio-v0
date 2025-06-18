import React from "react";
import bannerImage from "../../assets/git-profile.jpg";
import { FaReact } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

const Banner = () => {
  return (
    <div className="my-10 max-w-7xl mx-auto">
      <div
        className="p-5 rounded-lg bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0)),
          url('${bannerImage}')`,
        }}
      >
        <div className="mb-20">
          <div className="flex items-center gap-2">
            <FaReact size={24} />
            <h4 className="uppercase">About Me</h4>
          </div>
          <h2 className="text-3xl mt-8">
            {" "}
            <span className="text-purple-300">Hey,</span> I'm Borhan
          </h2>

          <p className="text-lg w-3/4 mt-4 relative">
            I'm a passionate Full Stack Developer specializing in the MERN stack
            (MongoDB, Express.js, React, and Node.js). I thrive on crafting
            modern, responsive, and scalable web applications that not only look
            great but also deliver smooth and intuitive user experiences. My
            focus is on writing clean, efficient code and solving real-world
            problems through innovative digital solutions. Whether it's building
            from scratch or improving existing systems, I bring creativity,
            precision, and a strong problem-solving mindset to every project I
            work on."
          </p>
        </div>

        <div className="bg-black/50 px-5 py-10 rounded-lg backdrop-blur-xs text-white max-w-xl space-y-5">
          <div className="flex items-center gap-2 ">
            <TbTargetArrow size={25} />
            <h4 className="uppercase">Why I Do What I Do</h4>
          </div>
          <p className="mt-2 text-lg">
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
      <div className="flex mt-3 justify-between">
        <h5 className="drop-shadow-xl drop-shadow-purple-500">
          <a href="">Facebook</a>
        </h5>
        <h5 className="drop-shadow-xl drop-shadow-purple-500">
          <a href="">LinkedIn</a>
        </h5>
        <h5 className="drop-shadow-xl drop-shadow-purple-500">
          <a href="">Twitter</a>
        </h5>
        <h5 className="drop-shadow-xl drop-shadow-purple-500">
          <a href="">Stack Overflow</a>
        </h5>
      </div>
    </div>
  );
};

export default Banner;
