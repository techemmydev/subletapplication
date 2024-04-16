import React from "react";
import style from "../Card/card.module.css";
const Card1 = ({ img, cardTitle, parag }) => {
  return (
    <div>
      <div className={style.cardTitle_divboder}>
        <div className={style.image_container}>
          <img src={img} style={{ width: "80%" }} />
        </div>
        <h3 className={style.cardTitle}>{cardTitle}</h3>
        <p className={style.parag}>{parag}</p>
      </div>
    </div>
  );
};

export default Card1;
