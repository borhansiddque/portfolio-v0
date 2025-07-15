import React from "react";
import MyStudioSection from "./MyStudioSection";
import { Link } from "react-router";

const AboutMe = () => {
  return (
    <div className="max-w-7xl mx-auto my-30 flex flex-col lg:flex-row gap-8 lg:gap-0">
      <div className="flex-1">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          About Me<span className="text-orange-500">.</span>
        </h2>
        <div className="text-base mt-6 space-y-4">
          <p>
            I began my web development journey in 2023 with a strong passion for
            creating modern, user-friendly websites. Starting with the
            fundamentals—HTML, CSS, and JavaScript—I built my first projects
            from the ground up.
          </p>
          <p>
            As I advanced, I specialized in React.js to develop dynamic and
            responsive user interfaces. Along the way, I also gained
            foundational backend knowledge using the MERN stack (MongoDB,
            Express.js, Node.js), enabling me to contribute effectively to full
            stack projects.
          </p>
          <p>
            With 2 years of hands-on experience, I now focus on writing clean,
            efficient frontend code while continuously sharpening my backend
            skills to build complete and scalable SaaS applications.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          {/* Currently Exploring Section */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              🎯 Currently Exploring
            </h3>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 font-mono">
              <li>Learning Next.js and TypeScript</li>
              <li>
                Practicing backend development using Node.js, Express, and
                MongoDB
              </li>
              <li>Working on SaaS-style app architectures</li>
              <li>Improving design skills for better UX/UI</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <MyStudioSection />
      </div>
    </div>
  );
};

export default AboutMe;
