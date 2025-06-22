import React from "react";
import bgVideo from "../assets/bg.mp4"

const VideoBackground = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover -z-10 bg-black"
    >
      <source src={bgVideo} type="video/mp4" />
    </video>
  );
};

export default VideoBackground;
