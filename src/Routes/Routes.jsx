import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blogs from "../pages/Home/Blogs/Blogs";
import AllJobs from "../pages/AllJobs/AllJobs";
import JobDetailsPage from "../pages/JobDetailsPage/JobDetailsPage";
import AddJob from "../pages/Home/AddJob/AddJob";
import PrivateRoute from "./PrivateRoute";
import AddAJob from "../pages/Home/AddJob/AddAJob";
import MyJobs from "../pages/MyJobs/MyJobs";
import UpdateJob from "../pages/Home/UpdateJob/UpdateJob";


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
        element: <AllJobs></AllJobs>      
      },
      {
        path: "/addjob",
        element: <PrivateRoute><AddAJob></AddAJob></PrivateRoute>
      },
      {
        path: "/myjobs",
        element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>

      },
      {
        path: "/jobs/:id",
        element: <PrivateRoute><JobDetailsPage></JobDetailsPage></PrivateRoute>
      },
      {
        path: "/update/:id",
        element: <UpdateJob></UpdateJob>              
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      }
    ]
  },
]);

export default router;