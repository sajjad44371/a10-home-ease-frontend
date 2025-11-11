import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MyServices from "../pages/MyServices";
import AddServices from "../pages/AddServices";
import MyBookings from "../pages/MyBookings";
import Profile from "../pages/Profile";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/my-services",
        element: <MyServices></MyServices>,
      },
      {
        path: "/add-service",
        element: <AddServices></AddServices>,
      },
      {
        path: "/my-bookings",
        element: <MyBookings>,</MyBookings>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
