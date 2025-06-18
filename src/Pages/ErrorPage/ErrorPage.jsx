import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-gray-800 px-6 text-center">
      <h1 className="text-9xl font-extrabold text-purple-600">404</h1>
      <h2 className="text-3xl font-bold mt-4 text-gray-400">Page Not Found</h2>
      <p className="mt-2 text-gray-400 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors duration-300"
      >
        <FaArrowLeft />
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
