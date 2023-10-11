import React, { useState } from "react";
import Footer from "./Components/Footer/Footer"
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import PageRouting from "./Components/PageRouting";
import Private from "./Components/Private";
import SellerRouting from "./Components/SellerRouting";
import SignUpUser from "./Components/UserAuth/SignUpUser"
import SignInUser from "./Components/UserAuth/SignInUser"
import UserOtp from "./Components/UserAuth/UserOtp";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={ <PageRouting />} />
        <Route path="/signup-user" element={ <SignUpUser />} />
        <Route path="/login-user" element={ <SignInUser />} />
        <Route path="/otp-user" element={ <UserOtp />} />
        <Route path="/seller-page" element={ <LandingPage />} />
        <Route path="/seller-dashboard/*" element={ <Private><SellerRouting /></Private>} />
      </Routes>
    </div>
  );
};

export default App;
