import React from 'react'
import { Routes } from 'react-router-dom';
import SellerRoutes from "./AllRoutes/SellerRoutes"
import SellerHeader from "./Header/SellerHeader"
import Footer from './Footer/Footer';

const SellerRouting = () => {
  return (
    <div>
      <SellerHeader />
      <SellerRoutes />
      {/* <Footer /> */}
    </div>
  )
}

export default SellerRouting