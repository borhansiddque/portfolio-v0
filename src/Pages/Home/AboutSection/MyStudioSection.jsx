import { FaCode, FaServer, FaPaintBrush } from "react-icons/fa";

const MyStudioSection = () => {
  return (
    <section className="lg:max-w-xl mx-auto bg-orange-950/20 backdrop-blur-xs text-gray-100 rounded-xl p-5 sm:p-8 space-y-6 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-orange-500 font-bold text-sm uppercase tracking-wide">
          <FaCode size={24} />
          <span className="text-2xl">My Studio</span>
        </div>
        {/* Download CV button */}
        <a
          href="/borhan_siddque_resume.pdf"
          download
          className="inline-block rounded-full px-4 py-2 text-base font-bold bg-linear-to-r from-orange-700 to-orange-600 hover:bg-orange-600 text-orange-100 shadow-none hover:shadow-sm hover:shadow-orange-500 hover:scale-95 transition-all duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* Intro Text */}
      <p className="text-base leading-relaxed">
        Hey there!{" "}
        <span role="img" aria-label="waving hand">
          👋
        </span>{" "}
        I'm <strong>Borhan Siddque</strong>. This isn't just a portfolio — it's
        a reflection of my journey as a developer. I build thoughtful, clean,
        and modern web experiences with a focus on simplicity, functionality,
        and impact.
      </p>

      {/* Skills/Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {/* Web Development */}
        <div className="bg-orange-800 rounded p-4 space-y-2 col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 text-orange-100 font-bold text-sm uppercase tracking-wide">
            <FaCode />
            <span>Web Development</span>
          </div>
          <p className="text-orange-100 text-sm leading-snug">
            Building responsive, fast, and user-friendly websites using the
            latest frontend technologies like React.js and Tailwind CSS.
          </p>
        </div>

        {/* Backend Basics */}
        <div className="bg-orange-800 rounded p-4 space-y-2 col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 text-orange-100 font-bold text-sm uppercase tracking-wide">
            <FaServer />
            <span>Backend Basics</span>
          </div>
          <p className="text-orange-100 text-sm leading-snug">
            Understanding of backend with Node.js, Express.js, and MongoDB to
            support full stack application development.
          </p>
        </div>

        {/* UI Design */}
        <div className="bg-orange-800 rounded p-4 space-y-2 col-span-2">
          <div className="flex items-center gap-2 text-orange-100 font-bold text-sm uppercase tracking-wide">
            <FaPaintBrush />
            <span>UI Design</span>
          </div>
          <p className="text-orange-100 text-sm leading-snug">
            Designing clean, consistent, and accessible interfaces that improve
            user experience and engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyStudioSection;
