import React from "react";
import footerstyle from "../../My_Component/FooterContent/footer.module.css";
import { Link } from "react-router-dom";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import { CiFacebook } from "react-icons/ci";

import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const copyright = new Date().getFullYear();
  return (
    <footer>
      <div className={footerstyle.footercontainer}>
        <div className={footerstyle.flexcontainer}>
          <div>
            <div className={footerstyle.footerimage}>
              <img
                src="/src/assets/Subletimages/Frame 1.png"
                alt="logofooter"
                className={footerstyle.footerimage2}
              />
            </div>
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
                    sublet@gmail.com{" "}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className={footerstyle.quicklink}>
            <h2>quick links</h2>
            <nav>
              <ul>
                <Link className={footerstyle.quicklinks}>
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
              <CiFacebook className={footerstyle.iconstyle_quick} />
              <FaInstagram className={footerstyle.iconstyle_quick} />
            </div>
          </div>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          backgroundColor: " #333333",

          padding: "2rem",
          fontfamily: "Inter",
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "30px",
          letterSpacing: "0em",
          color: "#0bdaa6",
        }}
      >
        {copyright} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
