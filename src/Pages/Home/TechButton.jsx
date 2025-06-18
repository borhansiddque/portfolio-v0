import React from 'react';
import { Link } from 'react-router';

const TechButton = ({icon, title, link}) => {
  return (
   <Link to={link} className=''>
    <button className='btn backdrop-blur-xs bg-black/10 transition-all duration-300 flex items-center px-4 py-2 rounded-lg border border-purple-50 shadow-none hover:shadow-lg hover:shadow-white/20'>
      <img src={icon} alt="" className='h-8' />
      <span className='ml-2 text-base font-semibold'>{title}</span>
    </button>
   </Link>
  );
};

export default TechButton;