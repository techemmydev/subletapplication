import React from "react";
import style from "../FeatureComponent/feature.module.css";
import Card1 from "../Card/Card1";
import Button from "../ButtonComponent/Button";
import { Link } from "react-router-dom";

const Feature1 = ({
  title,
  desc,
  img1,
  cardTitle1,
  parag1,
  img2,
  path,
  cardTitle2,
  parag2,
}) => {
  return (
    <section className={style.features_container}>
      <div className={style.features_container_classroom}>
        <div className={style.features_class}>
          <div className={style.features_classroom_Line}></div>
          <h2 className={style.classroom_h2}>{title}</h2>
          <p className={style.classroom_desc}>{desc}</p>
          <Link style={{ textDecoration: "none" }} to={path}>
            <Button
              style={{
                backgroundColor: " white",
                border: "2px solid  #28162d",
                color: " black",
                boxShadow: "0px 4px 4px 0px #00000040",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "lowercase",
                fontFamily: "Plus Jakarta Sans",

                fontWeight: "500",
              }}
              hoverStyle={{ backgroundColor: "  #f1f6f9" }}
            >
              learn more
            </Button>
          </Link>
          <div className={style.features_classroom_Line2}></div>
        </div>
        <div className={style.cardDetails}>
          <Card1 img={img1} cardTitle={cardTitle1} parag={parag1} />
          <Card1 img={img2} cardTitle={cardTitle2} parag={parag2} />
        </div>
      </div>
    </section>
  );
};

export default Feature1;
