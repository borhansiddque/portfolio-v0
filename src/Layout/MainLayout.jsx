import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import LottieBackground from "../Components/LottieBackground";

const MainLayout = () => {
  return (
    <>
      <LottieBackground />
      <main className="relative z-10">
        <Navbar />
        <Outlet></Outlet>
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;
