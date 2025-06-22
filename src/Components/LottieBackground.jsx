import Lottie from "lottie-react";
import animationData from "../assets/lotties/body-bg.json";
// import animationData from "/public/portfolio-bg.json";

const LottieBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none overflow-hidden">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default LottieBackground;