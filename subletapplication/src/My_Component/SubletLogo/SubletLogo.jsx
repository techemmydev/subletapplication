import React from "react";
import logoStyles from "../../My_Component/SubletLogo/SubletLogo.module.css";
import logo from "../../assets/SubletImages/logo.png";

const SubletLogo = () => {
  return (
    <div className={logoStyles.logo}>
      <img src={logo} alt="subletlogo" className={logoStyles.imglogo} />
    </div>
  );
};

export default SubletLogo;
