import React from "react";
import ButtonStyles from "../../My_Component/ButtonComponent/Button.module.css";
import { useState } from "react";
const Button = ({ children, style, hoverStyle, next }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <button
        className={`${ButtonStyles.myButton} `}
        style={isHovered ? { ...style, ...hoverStyle } : style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={next}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
