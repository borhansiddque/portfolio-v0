import React from "react";
import MyStudioSection from "./MyStudioSection";

const AboutMe = () => {
  return (
    <div className="max-w-7xl mx-auto my-30 flex flex-col md:flex-row gap-8 md:gap-0">
      <div className="flex-1">
        <h2 className="text-2xl">
          About Me<span className="text-purple-300">.</span>
        </h2>
        <div className="text-base mt-6 space-y-4">
          <p>
            I began my web development journey in 2023 with a strong passion for
            creating modern and user-friendly websites. I started by learning
            the core technologies — HTML, CSS, and JavaScript — and built my
            first project using those basics.
          </p>
          <p>
            As I progressed, I specialized in React.js for building dynamic and
            responsive user interfaces. I also have foundational knowledge of
            the backend using the MERN stack — working with MongoDB, Express.js,
            and Node.js — which helps me understand and contribute to full stack
            projects.
          </p>
          <p>
            With 2 years of experience, I focus on crafting clean, efficient
            frontend code while continuously improving my backend skills to
            build complete SaaS applications.
          </p>
        </div>
      </div>
      <div className="flex-1">
        <MyStudioSection />
      </div>
    </div>
  );
};

export default AboutMe;
