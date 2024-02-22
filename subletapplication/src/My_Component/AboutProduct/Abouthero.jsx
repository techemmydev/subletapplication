import React from "react";
import Aboutstylehero from "../../My_Component/AboutProduct/Abouthero.module.css";
import { AboutusDetails } from "../../My_DataArrays/AboutProduct";

const Abouthero = () => {
  return (
    <>
      <section className={Aboutstylehero.section_about}>
        <div className={Aboutstylehero.aboutcontainer}>
          {AboutusDetails.map((details, index) => {
            return (
              <main key={index}>
                <div
                  className={`${Aboutstylehero.section_grid} ${
                    index === 1 ? Aboutstylehero.swap_product : ""
                  }`}
                >
                  <div className={Aboutstylehero.flex}>
                    <div style={{ borderLeft: "5px solid #0bdaa6" }}>
                      <h1 className={Aboutstylehero.aboutheading}>
                        {details.heading}
                      </h1>
                    </div>
                    <div className={Aboutstylehero.aboutpara}>
                      <p>{details.paragraph}</p>
                    </div>
                  </div>
                  <div>
                    <img
                      src={details.img}
                      alt={details.alt}
                      style={{ width: "350px" }}
                    />
                  </div>
                </div>
              </main>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Abouthero;
