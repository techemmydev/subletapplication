import React from "react";
import freebtn from "../../My_Component/FreeButton/Frebutton.module.css";
import { Link } from "react-router-dom";
const Freebutton = () => {
  return (
    <div>
      <Link to="/signup" className={freebtn.ii}>
        <button className={freebtn.free}>START NOW, IT’S FREE</button>
      </Link>{" "}
    </div>
  );
};

export default Freebutton;
