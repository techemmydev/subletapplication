import logoStyles from "../../My_Component/SubletLogo/SubletLogo.module.css";
import logo from "../../assets/SubletImages/logo.png";
import React, { useState, useEffect } from "react";
const SubletLogo = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        // Adjust scroll threshold as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={logoStyles.logo}>
      <h3>NotifyMe {scrolled && <span>App</span>}</h3>
      {/* <img src={logo} alt="subletlogo" className={logoStyles.imglogo} /> */}
    </div>
  );
};

export default SubletLogo;
