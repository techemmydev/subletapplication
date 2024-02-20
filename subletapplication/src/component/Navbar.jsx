import React from "react";
import navStyles from "./Style_Component/Navbar.module.css";
import SubletLogo from "./SubletLogo";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";
const Navbar = (props) => {
  const { joinus } = props;

  const location = useLocation();
  // const isActive = (route) => location.pathname === route;
  function isActive(route) {
    return location.pathname === route;
  }

  const routes = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      <header className={navStyles.navcontainer}>
        <div className={navStyles.container}>
          <div className={navStyles.innercontainer}>
            <div>
              <Link to="/">
                <SubletLogo />
              </Link>
            </div>
            <div className={navStyles.navigationLink}>
              <nav className={navStyles.Linkss}>
                <ul>
                  {routes.map((route, index) => (
                    <Link
                      to={route.path}
                      key={index}
                      style={{
                        color: isActive(route.path) ? " #0bdaa6" : "",
                        fontWeight: isActive(route.path) ? "700" : "500",
                        textDecoration: isActive(route.path)
                          ? "underline"
                          : "none",
                      }}
                    >
                      <li>{route.label}</li>
                    </Link>
                  ))}
                </ul>
              </nav>
            </div>
            <div className={navStyles.logindetails}>
              <Link to="/login">
                {" "}
                <li>sign in</li>{" "}
              </Link>

              <Button sign={joinus} className="show">
                join us
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
