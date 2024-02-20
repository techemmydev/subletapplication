import React from "react";
import ButtonStyles from "../../My_Component/ButtonComponent/Button.module.css";
const Button = ({ children }) => {
  return (
    <>
      <div>
        <button className={ButtonStyles.myButton} type="submit">
          {children}
        </button>
      </div>
    </>
  );
};

export default Button;
