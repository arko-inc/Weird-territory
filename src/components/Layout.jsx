import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen h-20 bg-black"></div>
      <Outlet /> {/* This will render the current page */}
    </>
  );
};

export default Layout;
