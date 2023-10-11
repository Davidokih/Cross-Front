import React from 'react'
import AllRoutes from './AllRoutes/AllRoutes';
import Header from './Header/Header';
import { Routes } from 'react-router-dom';
import Footer from './Footer/Footer';

const PageRouting = () => {
  return (
      <div>
          <Header />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default PageRouting