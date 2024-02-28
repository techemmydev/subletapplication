import React from "react";
import ButtonStyles from "../../My_Component/ButtonComponent/Button.module.css";
const Button = ({ children, styley }) => {
  return (
    <div>
      <button className={ButtonStyles.myButton} style={`${styley}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
