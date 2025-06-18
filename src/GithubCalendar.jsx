import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {
  return (
    <>
      <h1 className="text-4xl text-white mt-10 mb-5 text-center">
        Contribution Graph
      </h1>
      <div className="p-5 flex items-center justify-center">
        <GitHubCalendar username="borhansiddque" />
      </div>
    </>
  );
};

export default GithubCalendar;
