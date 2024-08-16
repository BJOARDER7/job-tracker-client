import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blogs from "../pages/Home/Blogs/Blogs";
import AllJobs from "../pages/AllJobs/AllJobs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/alljobs",
        element: <AllJobs></AllJobs>,
        loader: () => fetch('http://localhost:5000/jobs')
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      }
    ]
  },
]);

export default router;