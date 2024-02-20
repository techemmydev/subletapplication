import React from "react";
import ButtonStyles from "./Style_Component/Button.module.css";
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
