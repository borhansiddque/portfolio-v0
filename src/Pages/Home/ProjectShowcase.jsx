import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";

const ProjectShowcase = () => {
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
    <section className="max-w-7xl mx-auto mb-30">
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">
        Featured Projects<span className="text-orange-500">.</span>
      </h2>

      <div className="space-y-8">
        {projects.slice(0, 3).map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row gap-8 bg-[#1F1F1F] p-6 rounded-xl shadow-lg hover:shadow-orange-500/20 transition"
          >
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-50 md:h-60 lg:h-72  rounded-lg"
              />
            </div>

            {/* Info */}
            <div className="md:w-1/2 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-orange-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-orange-700 text-white px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="btn bg-orange-700 text-white">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className=""
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
                <div className="btn bg-orange-700 text-white">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className=""
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-14">
        <p className="text-sm text-gray-400 mb-2">Want to see more?</p>
        <Link
          to={"/my-works"}
          className="flex items-center gap-2 w-fit mx-auto rounded-lg px-5 py-3 text-base font-bold bg-orange-700 hover:bg-orange-600 text-orange-200 shadow-none hover:shadow-md hover:shadow-orange-500 hover:scale-95 transition-all duration-300"
        >
          View All Projects
          <FaArrowRight></FaArrowRight>
        </Link>
      </div>
    </section>
  );
};

export default ProjectShowcase;
