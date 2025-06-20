import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ComingSoon from "../Pages/ComingSoon/ComingSoon";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "my-works",
        Component: ComingSoon
      },
      {
        path: "blogs",
        Component: ComingSoon
      },
      {
        path: "contact-me",
        Component: ComingSoon
      },
      {
        path: "/*",
        Component: ErrorPage
      }
    ],
  },
]);

export default router;