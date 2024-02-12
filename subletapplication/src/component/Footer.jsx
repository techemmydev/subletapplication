import React from "react";
import footerstyle from "./footer.module.css";
const Footer = () => {
  return (
    <footer>
      <div className={footerstyle.footercontainer}>
        <div className={footerstyle.flexcontainer}>
          <div>
            <h1>logo</h1>
          </div>
          <div>
            <h2>contact us</h2>
            <ul>
              <li>08065592378,090575757575</li>
              <li>088888888888888888</li>
            </ul>
          </div>
          <div>
            <h2>quick link</h2>
            <nav>
              <ul>
                <li>contact us</li>
                <li>privacy policy</li>
                <li>terms of use</li>
              </ul>
            </nav>
          </div>
          <div>
            <ul>
              <li>08065592378,090575757575</li>
              <li>088888888888888888</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
