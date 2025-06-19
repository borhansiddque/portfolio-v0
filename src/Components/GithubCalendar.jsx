import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {
  return (
    <div className="">
      <h1 className="text-4xl text-white mt-10 mb-5 text-center">
        Contribution Graph
      </h1>
      <div className="p-5 flex items-center justify-center">
        <GitHubCalendar username="borhansiddque" />
      </div>
    </div>
  );
};

export default GithubCalendar;
