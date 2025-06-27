import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {
  return (
    <div className="mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-5">
          Contribution Graph<span className="text-orange-500">.</span>
        </h2>
      <div className="p-5 flex items-center justify-center">
        <GitHubCalendar
          username="borhansiddque"
          For Active Commits
          transformData={(contributions) =>
            contributions.filter((day) => day.count > 0)
          }
        />
      </div>
    </div>
  );
};

export default GithubCalendar;
