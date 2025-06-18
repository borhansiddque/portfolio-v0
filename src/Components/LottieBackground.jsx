import Lottie from "lottie-react";
import animationData from "../../public/body-bg.json";

const LottieBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
};

export default LottieBackground;