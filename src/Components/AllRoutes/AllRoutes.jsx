import React from "react";
import { useRoutes } from "react-router-dom";
import Category from "../Category/Category";
import SignUp from "../SigmUpAndSignIn/SignUp";
import SignIn from "../SigmUpAndSignIn/SignIn";
import Information from "../Information/Information";
import Detail from "../Detail/Detail";
import Payment from "../Payment/Payment";
import Review from "../Review/Review";
import Accreview from "../Review/Accreview";
import Allitems from "../Allitems/Allitems";
import ErrorOtp from "../ErrorOtp/ErrorOtp";
import Checkout from "../Payment/checkout";
import Shipping from "../Payment/Shipping";
import Otppage from "../OtpPage/Otppage";
import Bankdetails from "../SigmUpAndSignIn/Bankdetails";
import Businessinfo from "../SigmUpAndSignIn/Businessinfo";
import PersonalInfo from "../SigmUpAndSignIn/PersonalInfo";
import Featured from "../Allitems/Featured";
import Cart from "../Payment/Cart";
import Categories from "../Allitems/Categories"
import Finishshipping from "../Payment/Finishshipping"
import PaymentReview from "../Review/PaymentReview";
import Paystack from "../Payment/Paystack"

const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Category />,
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
            {
              path: "verify",
              element: <Otppage />,
            },
            {
              path: "information",
              element: <Information />,
            },
            {
              path: "bankdetails",
              element: <Bankdetails />,
            },
            {
              path: "businessinfo",
              element: <Businessinfo />,
            },
            {
              path: "personalInfo",
              element: <PersonalInfo />,
            },
            {
              path: "review",
              element: <Review />,
            },
            {
              path: "acct-review",
              element: <Accreview />,
            },
            {
              path: "otperror",
              element: <ErrorOtp />,
            },
          ],
        },
        {
          path: "/allitems",
          element: <Allitems />,
        },
        {
          path: "/payment-review",
          element: <PaymentReview />,
        },
        
        {
          path: "/featured",
          element: <Featured />,
        },
        {
          path: "/:id",
          element: <Categories />,
        },
        
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/finishshipping",
          element: <Shipping />,
        },
        {
          path: "/ready-to-ship",
          element: <Finishshipping />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
    
        {
          path: "/detail/:id",
          element: <Detail />,
        },
        {
          path: "/paystack",
          element: <Paystack />,
        },
        {
          path: "/payment",
          children: [
            {
              index: true,
              element: <Payment />,
            }
          ]
        },
      ],
    },
  
  
  ]);

  return element;
};

export default AllRoutes;
