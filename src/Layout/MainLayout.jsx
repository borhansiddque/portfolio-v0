import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import LottieBackground from "../Components/LottieBackground";
import GithubPopup from "../Components/GithubPopup";

const MainLayout = () => {
  return (
    <>
      <GithubPopup></GithubPopup>
      <LottieBackground />
      <main className="relative z-10">
        <Navbar />
        <div className="min-h-[80vh]">
          <Outlet></Outlet>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;
