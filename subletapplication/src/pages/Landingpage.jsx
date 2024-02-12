import React from "react";
import Navbar from "../component/Navbar";

import Heropage from "../component/Heropage";
import Herophoto from "../component/Herophoto";
import Herosection from "../component/Herosection";
import Footer from "../component/Footer";

const Landingpage = () => {
  return (
    <>
      <section>
        <Navbar />
        <Heropage />
        <Herophoto />
        <Herosection />
        <Footer />
      </section>
    </>
  );
};

export default Landingpage;
