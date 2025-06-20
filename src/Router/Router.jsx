import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ComingSoon from "../Pages/ComingSoon/ComingSoon";
import ContactMe from "../Pages/ContactMe/ContactMe";

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
        Component: ContactMe
      },
      {
        path: "/*",
        Component: ErrorPage
      }
    ],
  },
]);

export default router;