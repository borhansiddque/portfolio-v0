import { FaClock } from "react-icons/fa";

const ComingSoon = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center  text-white px-4">
      <div className="text-center max-w-lg space-y-6">
        {/* Icon */}
        <div className="text-purple-500 text-5xl flex items-center justify-center">
          <FaClock />
        </div>

        {/* Title */}
        <h3 className="text-4xl font-bold">
          Coming Soon<span className="text-purple-500">.</span>
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-base">
          I'm currently working on something awesome. Stay tuned for the launch of my new site — it's going to be worth the wait!
        </p>

        {/* Get Notified Button (no email field) */}
        <a
          href="https://github.com/borhansiddque"
          target="_blank"
          className="px-6 md:px-8 py-2 text-base font-medium rounded-lg bg-purple-800 text-purple-200 hover:bg-purple-700 shadow-none hover:shadow-lg hover:shadow-purple-500 transition-all duration-300 border-none"
        >
          Check My Github
        </a>

        {/* Footer note */}
        <p className="text-xs text-gray-600 mt-4">
          &copy; {new Date().getFullYear()} Borhan Siddique. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
