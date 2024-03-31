import React from "react";
import style from "../TestimonialComponent/testify.module.css";
import { testimonailDeatils } from "../../My_DataArrays/testominalArray";
const Testimonial = () => {
  return (
    <section className={style.testify_secection_container}>
      <div className={style.titleh1}>
        <h1>Testimonials</h1>
      </div>
      <div className={style.testimonaildeatils_flex}>
        {testimonailDeatils.map((items, index) => {
          return (
            <div key={index} className={style.info_box}>
              <div className={style.persondetails_box}>
                <div>
                  <img src={items.img} alt="" />
                </div>
                <div className={style.infoStyle}>
                  <h1>{items.heading}</h1>
                  <p>{items.title}</p>
                </div>
              </div>
              <div className={style.reviews_info}>
                <p>{items.paragraph}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div className={style.sliderbar}></div>
      </div>
    </section>
  );
};

export default Testimonial;
