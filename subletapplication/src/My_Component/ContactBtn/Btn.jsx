import React from "react";

const Btn = () => {
  return (
    <div>
      <button
        style={{
          width: "100%",
          display: "inline-block",
          backgroundColor: "#0BDAA6",
          color: "white",
          height: "50px",
          padding: " 14px, 20px, 14px, 20px",
          borderRadius: "18px",
          border: "none",
          textAlign: "center",
          fontamily: "Roboto",
          fontSize: "18px",
          fontWeight: "500",
          lineHeight: "18px",
          letterSpacing: "0em",
          textTransform: "capitalize",
        }}
        type="submit"
      >
        submit
      </button>
    </div>
  );
};

export default Btn;
