import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Tutor Lingo",
    description:
      "An online platform for students to connect with expert tutors, schedule sessions, and track learning progress in real-time.",
    tech: ["React", "Firebase", "TailwindCSS", "Node JS", "Express JS", "MongoDB"],
    image: "https://img.3s-soft.com/uploads/tutor.png",
    github: "https://github.com/borhansiddque/tutor-lingo-app",
    live: "https://tutor-lingo.web.app/",
  },
  {
    title: "Recipe Haven",
    description:
      "A modern recipe sharing platform with user login, search filtering, and favorites.",
    tech: ["Vite", "React", "TailwindCSS", "Firebase", "Node JS", "Express JS", "MongoDB"],
    image: "https://img.3s-soft.com/uploads/recipe.png",
    github: "https://github.com/borhansiddque/recipe-haven-app",
    live: "https://recipe-haven-app-a09fe.web.app/",
  },
];

const ProjectShowcase = () => {
  return (
    <section className="max-w-7xl mx-auto mb-30">
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">
        Featured Projects<span className="text-orange-500">.</span>
      </h2>

      <div className="space-y-8">
        {projects.map((project, idx) => (
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
