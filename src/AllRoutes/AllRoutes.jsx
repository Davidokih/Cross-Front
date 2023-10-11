import React from "react";
import { useRoutes } from "react-router-dom";
import LandingPage from "../Components/LandingPage/LandingPage";
import Category from "../Components/Category/Category";
import SignUp from "../Components/SigmUpAndSignIn/SignUp";
import SignIn from "../Components/SigmUpAndSignIn/SignIn";
import Information from "../Components/Information/Information";
import Detail from "../MComponent/Detail/Detail";
import Payment from "../Components/Payment/Payment";
import Shipping from "../Components/Payment/Shipping";
import Checkout from "../Components/Payment/Checkout";
import Dashboard from "../Components/SigmUpAndSignIn/Dashboard";
import Productpage from "../Components/SigmUpAndSignIn/Productpage";

const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/category",
      children: [
        {
          index: true,
          element: <Category />,
        },
      ],
    },
    {
      path: "/auth",
      children: [
        {
          index: true,
          element: <SignUp />,
        },
        {
          path: "signin",
          element: <SignIn />,
        },
      ],
    },
    {
      path: "/information",
      element: <Information />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/product",
      element: <Productpage />,
    },
    {
      path: "/detail",
      element: <Detail />,
    },
    {
      path: "/payment",
      element: <Payment />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/shipping",
      element: <Shipping />,
    },
  ]);

  return element;
};

export default AllRoutes;
