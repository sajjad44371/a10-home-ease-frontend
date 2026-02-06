import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MyServices from "../pages/MyServices";
import AddServices from "../pages/AddServices";
import MyBookings from "../pages/MyBookings";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import ServiceDetails from "../pages/ServiceDetails";
import ServiceUpdate from "../pages/ServiceUpdate";

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
        element: (
          <PrivateRouter>
            <MyServices></MyServices>
          </PrivateRouter>
        ),
      },
      {
        path: "/add-service",
        element: (
          <PrivateRouter>
            <AddServices></AddServices>
          </PrivateRouter>
        ),
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRouter>
            <MyBookings></MyBookings>
          </PrivateRouter>
        ),
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/service-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/service-update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
        element: <ServiceUpdate></ServiceUpdate>,
      },
    ],
  },
  {
    path: "*",
    element: <h3 className="text-red-400">404 not found</h3>,
  },
]);

export default router;
