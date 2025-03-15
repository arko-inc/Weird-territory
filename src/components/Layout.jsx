import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen h-20 bg-black"></div>
      <Outlet /> {/* This will render the current page */}
      <Footer/>
    </>
  );
};

export default Layout;
