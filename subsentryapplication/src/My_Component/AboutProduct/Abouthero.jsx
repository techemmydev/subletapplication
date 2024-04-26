import React from "react";
import Aboutstylehero from "../../My_Component/AboutProduct/Abouthero.module.css";
import { AboutusDetails } from "../../My_DataArrays/AboutProduct";

const Abouthero = () => {
  return (
    <>
      <div className={Aboutstylehero.section_about_backgrouncolor}>
        <div className={Aboutstylehero.section_about_backgrouncolor_heading}>
          <h1>We work together, to work for you</h1>
          <p>
            Our mission is to empower people to live their best financial lives.
            We offer our members a unique understanding of their finances and a
            suite of valuable services that save them time and money -
            ultimately giving them a leg up on their financial journey.
          </p>
        </div>
      </div>
      <div className={Aboutstylehero.people_image}>
        <img
          src="/SubletImages/G3RVSdOVYnlfnSCdgn5G9zR4zY.png"
          alt=""
          width={"60%"}
        />
      </div>
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
                    <div style={{ borderLeft: "5px solid  rgb(145, 13, 34)" }}>
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
                      // style={{ width: "200px" }}
                      className={Aboutstylehero.mobileimageSize}
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
