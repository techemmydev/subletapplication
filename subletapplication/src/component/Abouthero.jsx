import React from "react";
import Aboutstylehero from "../component/Style_Component/Abouthero.module.css";

const AboutusDetails = [
  {
    id: 1,
    heading: " OUR SERVICE",
    paragraph:
      "Sublet  website can be helpful for users to keep track of various subscriptions they’ve signed up for across different services. It helps in monitoring expenses , avoiding unexpected charges , and managing subscriptions more efficiently by providing reminders and nootifications about upcoming renewals or trials ending     ",
    img: "/src/assets/service-image.png",
    alt: "service-image",
  },
  {
    id: 2,
    heading: "OUR PRODUCT ",
    paragraph:
      "Sublet is an alert website that tracks an notifies users about updates, discountsor charges related to the subscribed services, products or Interests. It would offer customizeable alerts, timely notifications and definately a user-friendly interfaceto mange subscriptions easily.",
    img: "/src/assets/product-image.png",
    alt: "product-service",
  },
];

const Abouthero = () => {
  return (
    <>
      <section className={Aboutstylehero.section_about}>
        {AboutusDetails.map((details, index) => {
          return (
            <main key={index}>
              <div
                className={`${Aboutstylehero.section_grid} ${
                  index === 1 ? Aboutstylehero.swap_product : ""
                }`}
              >
                <div className={Aboutstylehero.flex}>
                  <h1>{details.heading}</h1>
                  <p>{details.paragraph}</p>
                </div>
                <div>
                  <img src={details.img} alt="" />
                </div>
              </div>
            </main>
          );
        })}
      </section>
    </>
  );
};

export default Abouthero;
