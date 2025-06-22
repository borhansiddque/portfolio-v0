import { FaClock } from "react-icons/fa";
import Countdown from "./Countdown";

const ComingSoon = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center  text-white px-4">
      <div className="text-center max-w-lg space-y-6 bg-orange-400/30 p-4 rounded-lg backdrop-blur-xs">
        {/* Icon */}
        <div className="text-orange-600 text-5xl flex items-center justify-center">
          <FaClock />
        </div>


        {/* Title */}
        <h3 className="text-4xl font-bold">
          Coming Soon<span className="text-orange-500">.</span>
        </h3>

        <Countdown targetDate="2025-09-01T00:00:00" />
        
        {/* Description */}
        <p className="text-gray-200 text-base">
          I'm currently working on something awesome. Stay tuned for the launch of my new site — it's going to be worth the wait!
        </p>

        {/* Get Notified Button (no email field) */}
        <a
          href="https://github.com/borhansiddque"
          target="_blank"
          className="px-6 md:px-8 py-2 text-base font-semibold rounded-lg bg-orange-800 text-orange-200 hover:bg-orange-700 shadow-none hover:shadow-lg hover:shadow-orange-500 transition-all duration-300 border-none"
        >
          Check My Github
        </a>

        {/* Footer note */}
        <p className="text-xs text-gray-200 mt-4">
          &copy; {new Date().getFullYear()} Borhan Siddique. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
