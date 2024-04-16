import React from "react";
import ButtonStyles from "../../My_Component/ButtonComponent/Button.module.css";
import { useState, useEffect } from "react";

const Button = ({ children, style, hoverStyle, next, onsubmit }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        // Adjust scroll threshold as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <button
        className={`${ButtonStyles.myButton} ${
          scrolled ? ButtonStyles.redBackground : ""
        }`}
        style={isHovered ? { ...style, ...hoverStyle } : style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={next}
        onSubmit={onsubmit}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
