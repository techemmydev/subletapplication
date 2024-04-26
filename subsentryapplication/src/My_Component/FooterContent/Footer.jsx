import React from "react";
import footerstyle from "../../My_Component/FooterContent/footer.module.css";
import { Link } from "react-router-dom";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import { CiFacebook } from "react-icons/ci";

import { FaInstagram } from "react-icons/fa";
import SubletLogo from "../SubletLogo/SubletLogo";
import Button from "../ButtonComponent/Button";

const Footer = () => {
  const copyright = new Date().getFullYear();
  return (
    <footer>
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          // backgroundColor: "red",
          height: "120px",
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
          padding: "2rem",
        }}
        className={footerstyle.getStarted}
      >
        <div>
          <h1>Get Started</h1>
          <p>sign up online today.</p>
        </div>
        <div>
          <Link to={"/signup"} style={{ textDecoration: "none" }}>
            {" "}
            <Button>Sign Up</Button>{" "}
          </Link>
        </div>
      </div>
      <div className={footerstyle.footercontainer}>
        <div className={footerstyle.flexcontainer}>
          <div className={footerstyle.footerimage}>
            {/* <img
                src="/src/assets/Subletimages/Frame 1.png"
                alt="logofooter"
                className={footerstyle.footerimage2}
              /> */}
            <SubletLogo />
          </div>
          <div className={footerstyle.contactlist}>
            <h2>contact us</h2>
            <ul>
              <li>
                <MdOutlineLocalPhone className={footerstyle.iconstyle} /> +234
                817 1122 907, +234 814 4349 593
              </li>
              <li>
                <FaWhatsapp className={footerstyle.iconstyle} />
                +234 8023019 103
              </li>
              <li>
                <MdOutlineMail className={footerstyle.iconstyle} />
                <Link className={footerstyle.emaillink}>
                  <span className={footerstyle.ctaemail}>
                    {" "}
                    Subsentry@gmail.com{" "}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className={footerstyle.quicklink}>
            <h2>quick links</h2>
            <nav>
              <ul>
                <Link className={footerstyle.quicklinks} to={"/contactus"}>
                  {" "}
                  <li>contact us</li>
                </Link>
                <Link className={footerstyle.quicklinks}>
                  {" "}
                  <li>privacy policy</li>
                </Link>
                <Link className={footerstyle.quicklinks}>
                  {" "}
                  <li>terms of use</li>
                </Link>
              </ul>
            </nav>
            <div className={footerstyle.icon_quicklink}>
              <Link
                to="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiFacebook className={footerstyle.iconstyle_quick} />
              </Link>

              <Link
                to="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className={footerstyle.iconstyle_quick} />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className={footerstyle.copyrightyear}>
        {copyright} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
