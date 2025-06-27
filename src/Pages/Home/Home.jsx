import React from "react";
import Banner from "./Banner";
import AboutMe from "./AboutSection/AboutMe";
import GithubCalendar from "./GithubCalendar";
import ProjectShowcase from "./ProjectShowcase";
import Technologies from "./TechSection/Technologies";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutMe />
      <ProjectShowcase />
      <Technologies />
      <GithubCalendar />
    </div>
  );
};

export default Home;
