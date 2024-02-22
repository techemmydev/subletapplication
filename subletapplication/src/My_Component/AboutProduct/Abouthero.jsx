import React from "react";
import Aboutstylehero from "../../My_Component/AboutProduct/Abouthero.module.css";

const AboutusDetails = [
  {
    id: 1,
    heading: " OUR SERVICE",
    paragraph:
      "Sublet  website can be helpful for users to keep track of various subscriptions they’ve signed up for across different services. It helps in monitoring expenses , avoiding unexpected charges , and managing subscriptions more efficiently by providing reminders and nootifications about upcoming renewals or trials ending     ",
    img: "/src/assets/SubletImages/service-image.png",
    alt: "service-image",
  },
  {
    id: 2,
    heading: "OUR PRODUCT ",
    paragraph:
      "Sublet is an alert website that tracks an notifies users about updates, discountsor charges related to the subscribed services, products or Interests. It would offer customizeable alerts, timely notifications and definately a user-friendly interfaceto mange subscriptions easily.",
    img: "/src/assets/SubletImages/product-image.png",
    alt: "product-service",
  },
];

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
