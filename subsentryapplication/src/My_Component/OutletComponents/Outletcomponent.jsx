import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../NavigationBar/Navbar";
import Footer from "../FooterContent/Footer";
const Outletcomponent = () => {
  return (
    <div>
      {/* The <Outlet> component serves as a placeholder for child routes */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Outletcomponent;
