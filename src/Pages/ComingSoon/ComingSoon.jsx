import { FaClock } from "react-icons/fa";
import Countdown from "./Countdown";

const ComingSoon = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center  text-white px-4">
      <div className="text-center max-w-lg space-y-6  p-4 rounded-lg backdrop-blur-xs">
        {/* Icon */}
        <div className="text-orange-600 text-5xl flex items-center justify-center">
          <FaClock />
        </div>

        {/* Title */}
        <h3 className="text-3xl sm:text-4xl font-bold">
          Coming Soon<span className="text-orange-500">.</span>
        </h3>

        <Countdown targetDate="2025-09-01T00:00:00" />

        {/* Description */}
        <p className="text-gray-200 text-base text-center font-mono">
          I'm currently working on something awesome. Stay tuned for the launch
          of my new site — it's going to be worth the wait!
        </p>

        {/* Get Notified Button (no email field) */}
        <div className="mt-6">
          <a
            href="https://github.com/borhansiddque"
            target="_blank"
            className="inline-block rounded-lg px-4 py-2 min-w-3xs text-base font-bold bg-orange-700 hover:bg-orange-600 text-orange-200 shadow-none hover:shadow-md hover:shadow-orange-500 hover:scale-95 transition-all duration-300"
          >
            Check My Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
