import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
// import LottieBackground from "../Components/LottieBackground";
import GithubPopup from "../Components/GithubPopup";
import { Toaster } from "react-hot-toast";
import VideoBackground from "../Components/VideoBackground";

const MainLayout = () => {
  return (
    <>
      <Toaster position="top-right" />
      <GithubPopup></GithubPopup>
      {/* <LottieBackground /> */}
      <VideoBackground />
      <main className="relative z-10 ">
        <Navbar />
        <div className="px-4 xl:px-0">
          <Outlet></Outlet>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;
