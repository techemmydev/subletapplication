import React from "react";
import navStyles from "../../My_Component/NavigationBar/Navbar.module.css";
import { routes } from "../../My_DataArrays/NavbarLink";
import SubletLogo from "../../My_Component/SubletLogo/SubletLogo";
import Button from "../../My_Component/ButtonComponent/Button";
import { Link, useLocation } from "react-router-dom";
const Navbar = (props) => {
  const { joinus } = props;

  const location = useLocation();
  // const isActive = (route) => location.pathname === route;
  function isActive(route) {
    return location.pathname === route;
  }

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
                <li>sign in</li>
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
