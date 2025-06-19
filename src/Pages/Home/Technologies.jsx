import React from "react";
import TechButton from "./TechButton";

const Technologies = () => {
  return (
    <div className="max-w-7xl mx-auto mb-20">
      <div className="">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold font-mono text-white">
          Tech I Use Daily<span className="text-purple-500">.</span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-400 text-base leading-relaxed font-mono">
          Since beginning my journey in 2023, I've explored and worked with a
          variety of technologies across the web development stack. Here are
          some of the tools and technologies I'm familiar with:
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-5">
        <TechButton icon={"https://img.icons8.com/?size=256&id=20909&format=png"} title={"HTML"} link={"https://www.w3schools.com/html/"} />
        <TechButton icon={"https://img.icons8.com/?size=256&id=7gdY5qNXaKC0&format=png"} title={"CSS"} link={"https://www.w3schools.com/css/"} />
        <TechButton icon={"https://i.ibb.co.com/Xk2BNVRn/download.png"} title={"Tailwind CSS"} link={"https://tailwindcss.com/"} />
        <TechButton icon={"https://i.ibb.co.com/qF7yJwSd/download.png"} title={"JavaScript"} link={"https://learnjavascript.online/"} />
        <TechButton icon={"https://i.ibb.co.com/c9jTvmt/download.png"} title={"TypwScript"} link={"https://learnjavascript.online/"} />
        <TechButton icon={"https://img.icons8.com/?size=256&id=NfbyHexzVEDk&format=png"} title={"React Js"} link={"https://react.dev/"} />
        <TechButton icon={"https://img.icons8.com/?size=256&id=62452&format=png"} title={"Firebase"} link={"https://firebase.google.com/"} />
        <TechButton icon={"https://img.icons8.com/?size=256&id=54087&format=png"} title={"Node JS"} link={"https://nodejs.org/en"} />
        <TechButton icon={"https://img.icons8.com/?size=256&id=WNoJgbzDr3i2&format=png"} title={"Express JS"} link={"https://expressjs.com/"} />
        <TechButton icon={"https://img.icons8.com/?size=256&id=74402&format=png"} title={"MongoDB"} link={"https://www.mongodb.com/"} />
        <TechButton icon={"https://img.icons8.com/?size=80&id=EPbEfEa7o8CB&format=png"} title={"PostMan"} link={"https://www.postman.com/"} />
      </div>
    </div>
  );
};

export default Technologies;
