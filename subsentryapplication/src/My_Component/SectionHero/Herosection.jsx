import React from "react";
import herosectionstyle from "../../My_Component/SectionHero/herosection.module.css";
import { featuresArray } from "../../My_DataArrays/Features";
import Testimonial from "../TestimonialComponent/Testimonial";
const Herosection = () => {
  return (
    <>
      <div>
        <div className={herosectionstyle.herotitle}>
          <h1>Explore More Subsentry Features</h1>
        </div>

        <section className={herosectionstyle.hero_section}>
          <div style={{ width: "90%" }}>
            {featuresArray.map((item, index) => {
              return (
                <div key={index} className={herosectionstyle.div1}>
                  <div
                    // className={`${
                    //   index % 2 === 0
                    //     ? herosectionstyle.widthss
                    //     : herosectionstyle.widthss
                    // }`}
                    style={{
                      width: index % 2 === 0 ? "50%" : "0%",
                    }}
                  ></div>

                  <div className={herosectionstyle.div2}>
                    <div style={{ display: "flex", gap: "20px" }}>
                      <div className={herosectionstyle.div3}>
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
      {/* <Testimonial /> */}
    </>
  );
};

export default Herosection;
