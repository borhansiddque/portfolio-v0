import React from 'react';
import Banner from './Banner';
import AboutMe from './AboutMe';
import Technologies from './Technologies';
import GithubCalendar from '../../Components/GithubCalendar';

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutMe/>
      <GithubCalendar />
      <Technologies />
    </div>
  );
};

export default Home;