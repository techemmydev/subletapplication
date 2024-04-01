import React from "react";
import style from "../FeatureComponent/feature.module.css";
import Button from "../ButtonComponent/Button";
import { Link } from "react-router-dom";
const Feature2 = ({ title, desc, img, path }) => {
  return (
    <section className={style.features_container}>
      <div className={style.Feature2_container_flex}>
        <div style={{ width: "90%" }}>
          <img src={img} style={{ width: "90%" }} />
        </div>
        <div>
          <div className={style.featuereene}>
            <div className={style.features_classroom_Line}></div>
            <h2 className={style.Feature2_container_flex_h2}>{title}</h2>
            <p className={style.Feature2_container_flex_des}>{desc}</p>
            <div style={{ marginBottom: "20px" }}>
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
            </div>

            <div className={style.features_classroom_Line2}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
