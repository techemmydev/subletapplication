import React from "react";
import logoStyles from "./Style_Component/SubletLogo.module.css";
import logo from "../assets/subletImage/subletLogos/logo.png";

const SubletLogo = () => {
  return (
    <div className={logoStyles.logo}>
      <img src={logo} alt="subletlogo" className={logoStyles.imglogo} />
    </div>
  );
};

export default SubletLogo;
