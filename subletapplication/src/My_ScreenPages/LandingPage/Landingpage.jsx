import React, { useEffect } from "react";
import Navbar from "../../My_Component/NavigationBar/Navbar";
import Heropage from "../../My_Component/HeroPage/Heropage";
import Herosection from "../../My_Component/SectionHero/Herosection";
import Footer from "../../My_Component/FooterContent/Footer";
import { useState } from "react";
// import Loding from "../../My_Component/LoadingComponent/Loding";

const Landingpage = () => {
  const [loading, setIsloading] = useState(true);

  useEffect(() => {
    // Simulate loading time with setTimeout
    const timer = setTimeout(() => {
      setIsloading(!loading); // Set loading to false after loading is completed
    }, 8000); // Example: 3000 milliseconds (3 seconds) loading time
    return () => clearTimeout(timer); // Cleanup function
  }, []);

  return (
    <>
      <section>
        <Navbar />
        <Heropage />
        <Herosection />
        <Footer />
      </section>
    </>
  );
};

export default Landingpage;
// {loading ? (
//   <Loding />
// ) : (
//   <section>
//     <Navbar />
//     <Heropage />
//     <Herosection />
//     <Footer />
//   </section>
// )}
