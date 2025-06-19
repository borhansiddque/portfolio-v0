import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import toast from "react-hot-toast";

const GithubPopup = () => {
  const [show, setShow] = useState(true);
  const [countdown, setCountdown] = useState(10);
  useEffect(() => {
    if (countdown === 0) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  if (!show) {
    return null;
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("borhansiddque19@gmail.com");
      toast.success("Email copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="fixed flex items-center justify-center bg-black/60 z-50 w-full h-full">
      <div className="bg-neutral-900 text-white p-6 rounded-xl shadow-xl relative w-full max-w-sm">
        <div className="flex items-center justify-between mb-5">
          <div
            className="inline-block bg-[#2a2a2a] p-2 rounded cursor-pointer scale-95 hover:scale-110 shadow-none hover:shadow-lg hover:shadow-purple-500 border-none transition-all duration-300"
            onClick={handleCopyEmail}
          >
            <CiMail size={25} className="" />
          </div>
          <button
            onClick={() => setShow(false)}
            className=" text-gray-400 hover:text-white cursor-pointer "
          >
            <IoCloseCircleOutline
              size={30}
              className="hover:rotate-130 transition-all duration-300 text-purple-500"
            />
          </button>
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <div className="bg-neutral-800 p-3 rounded-full">
            <FaGithub size={25} />
          </div>

          <div>
            <h2 className="text-lg font-bold">Thanks for visiting!</h2>
            <p className="text-sm text-gray-400 mt-2">
              If you liked this, please follow me on GitHub – it’d make my day!
            </p>
          </div>

          <a
            href="https://github.com/borhansiddque"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-800 hover:bg-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-none hover:shadow-lg hover:shadow-purple-400 transition-all duration-300"
          >
            Follow on GitHub
          </a>

          <p className="text-xs text-gray-400">
            Closing in <span className="font-bold">{countdown}s</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GithubPopup;
