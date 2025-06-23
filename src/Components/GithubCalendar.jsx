import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {
  return (
    <div className="">
      <h1 className="text-4xl text-white mb-5 text-center">
        Contribution Graph
      </h1>
      <div className="p-5 flex items-center justify-center">
        <GitHubCalendar
          username="borhansiddque"
          transformData={(contributions) =>
            contributions.filter((day) => day.count > 0)
          }
        />
      </div>
    </div>
  );
};

export default GithubCalendar;
