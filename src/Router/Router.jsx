import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import MyWorks from "../Pages/MyWorksPage/MyWorks";

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
    ],
  },
]);

export default router;