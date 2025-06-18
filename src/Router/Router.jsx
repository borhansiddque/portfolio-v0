import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import MyWorks from "../Pages/MyWorksPage/MyWorks";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

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
        Component: MyWorks
      },
      {
        path: "/*",
        Component: ErrorPage
      }
    ],
  },
]);

export default router;