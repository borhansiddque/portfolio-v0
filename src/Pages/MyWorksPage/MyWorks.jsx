import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const MyWorks = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <div className="my-10 max-w-7xl mx-auto min-h-[72vh] px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">My Works<span className="text-orange-500">.</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="shadow-md rounded-lg overflow-hidden  backdrop-blur-lg flex flex-col justify-between shadow-orange-500"
          >
            <div className="">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48"
              />
            </div>
            <div className="p-4 flex flex-col">
              <div className="">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-3">{project.description}</p>
                <div className="mb-3">
                  <h4 className="font-semibold">Tech Stack:</h4>
                  <ul className="flex flex-wrap gap-2 mt-1">
                    {project.tech.map((tech, i) => (
                      <li
                        key={i}
                        className="text-xs bg-orange-700 text-white rounded px-2 py-1"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-500 hover:underline text-sm"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-green-500 hover:underline text-sm"
                >
                  <FaExternalLinkAlt /> Live Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
