import React from "react";
import herosectionstyle from "../../My_Component/SectionHero/herosection.module.css";
import { featuresArray } from "../../My_DataArrays/Features";
import Testimonial from "../TestimonialComponent/Testimonial";
const Herosection = () => {
  return (
    <>
      <div>
        <div className={herosectionstyle.herotitle}>
          <h1>Explore More NotifyMe App Features</h1>
        </div>

        <section className={herosectionstyle.hero_section}>
          <div style={{ height: "100vh", width: "90%" }}>
            {featuresArray.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    // backgroundColor: "pink",
                    height: "100px",
                    width: "100%",
                    marginBottom: "10px",
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      width: index % 2 === 0 ? "50%" : "0%",
                    }}
                  ></div>
                  {/* <div style={{ width: index % 1 === 0 ? "70%" : "0%" }}></div> */}

                  <div
                    style={{
                      height: "100%",
                      width: "50%",
                      padding: "1rem",
                      // backgroundColor: "green",
                      display: "flex",
                      flexWrap: "wrap",
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
                        <p className={herosectionstyle.feature_para}>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Testimonial />
    </>
  );
};

export default Herosection;
