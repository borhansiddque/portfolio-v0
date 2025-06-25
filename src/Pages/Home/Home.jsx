import React from 'react';
import Banner from './Banner';
import AboutMe from './AboutMe';
import Technologies from './Technologies';
import GithubCalendar from './GithubCalendar';
import ProjectShowcase from './ProjectShowcase';

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutMe/>
      <ProjectShowcase />
      <Technologies />
      <GithubCalendar />
    </div>
  );
};

export default Home;