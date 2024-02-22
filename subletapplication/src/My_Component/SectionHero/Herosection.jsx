import React from "react";
import herosectionstyle from "../../My_Component/SectionHero/herosection.module.css";
import { featuresArray } from "../../My_DataArrays/Features";

const Herosection = () => {
  return (
    <section className={herosectionstyle.hero_section}>
      <div>
        {featuresArray.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                // backgroundColor: "pink",
                height: "160px",
                width: "100%",
                marginBottom: "20px",
                display: "flex",
              }}
            >
              <div style={{ width: index % 2 === 0 ? "50%" : "0%" }}></div>
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  padding: "1rem",
                  // backgroundColor: "green",
                  display: "flex",
                }}
              >
                <div style={{ display: "flex", gap: "20px" }}>
                  <div
                    style={{
                      width: "30px",
                      padding: "2rem",
                      height: "30px",
                      borderRadius: "200px",
                      backgroundColor: " #E6E6E6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={item.img}
                      alt=""
                      style={{
                        width: "30px",
                        height: "30px",
                      }}
                    />
                  </div>
                  <div>
                    <h1 className={herosectionstyle.feature_heaading}>
                      {item.heading}
                    </h1>
                    <p className={herosectionstyle.feature_para}>{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Herosection;
