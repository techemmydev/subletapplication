import React from "react";
import Navbar from "../../My_Component/NavigationBar/Navbar";

import Heropage from "../../My_Component/HeroPage/Heropage";
// import Herophoto from "../../My_Component/HeroPhoto/Herophoto";
import Herosection from "../../My_Component/SectionHero/Herosection";
import Footer from "../../My_Component/FooterContent/Footer";

const Landingpage = () => {
  return (
    <>
      <section>
        <Navbar />
        <Heropage />
        {/* <Herophoto /> */}
        <Herosection />
        <Footer />
      </section>
    </>
  );
};

export default Landingpage;
