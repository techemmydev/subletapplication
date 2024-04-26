import navStyles from "../../My_Component/NavigationBar/Navbar.module.css";
import { routes } from "../../My_DataArrays/NavbarLink";
import SubletLogo from "../../My_Component/SubletLogo/SubletLogo";
import Button from "../../My_Component/ButtonComponent/Button";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const location = useLocation();
  // const isActive = (route) => location.pathname === route;
  function isActive(route) {
    return location.pathname === route;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`${navStyles.navcontainer} ${
          scrolled ? navStyles.redBackground : ""
        }`}
      >
        <Link to="/" className={navStyles.logo_link}>
          <SubletLogo />
        </Link>

        <div className={navStyles.navigationLink}>
          {isMenuOpen ? (
            <div className={navStyles.nav_mob_close} onClick={toggleMenu}>
              <AiOutlineClose />
            </div>
          ) : (
            <div className={navStyles.nav_mob_open} onClick={toggleMenu}>
              <FaBars />
            </div>
          )}
          <nav
            className={`${navStyles.Linkss} ${
              isMenuOpen ? navStyles.showMenu : ""
            }`}
          >
            <ul>
              {routes.map((route, index) => (
                <Link
                  to={route.path}
                  key={index}
                  style={{
                    color: isActive(route.path) ? "#28162d" : null,
                    fontWeight: isActive(route.path) ? "700" : "600",
                    textDecoration: isActive(route.path) ? "none" : "none",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <li>{route.label}</li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
        <div className={navStyles.logindetails}>
          <Link
            to="/login"
            className={navStyles.sigin}
            style={{
              color: isActive("/login") ? "rgb(145, 13, 34)" : "",
              fontWeight: isActive("/login") ? "700" : "600",
            }}
          >
            <li>login </li>
          </Link>

          <Button
            style={{
              border: "1px solid #28162d",
              color: "#28162d",
            }}
          >
            <Link
              to="/signup"
              className={`${navStyles.joinus} ${
                scrolled ? navStyles.redBackgroundcolortex : ""
              }`}
            >
              Get Started
            </Link>
          </Button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
