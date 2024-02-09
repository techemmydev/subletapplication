import React from "react";
import ButtonStyles from "./Button.module.css";
const Button = ({ children }) => {
  return (
    <>
      <div>
        <button className={ButtonStyles.myButton}>{children}</button>
      </div>
    </>
  );
};

export default Button;
