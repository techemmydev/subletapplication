import React from "react";
import Aboutstylehero from "./Abouthero.module.css";

const AboutusDetails = [
  {
    id: 1,
    heading1: " Why need a Subscription alert App",
    img1: "/Calendar.png",
    paragraph:
      "Sublet  website can be helpful for users to keep track of various subscriptions they’ve signed up for across different services. It helps in monitoring expenses , avoiding unexpected charges , and managing subscriptions more efficiently by providing reminders and nootifications about upcoming renewals or trials ending   ",
    icons: "",
  },
  {
    id: 2,
    icon: "",

    heading2: "wHAT DOES SUBLET OFFER ",
    img: "/Calendar.png",
    paragraph2:
      "Sublet is an alert website that tracks an notifies users about updates, discountsor charges related to the subscribed services, products or Interests. It would offer customizeable alerts, timely notifications and definately a user-friendly interfaceto mange subscriptions easily.",
  },
];

const Abouthero = () => {
  return (
    <>
      <section className={Aboutstylehero.section_about}>
        {AboutusDetails.map((details, index) => {
          return (
            <main key={index}>
              <div>
                <h1>{details.heading1}</h1>
                <p>{details.paragraph}</p>
                <div>
                  <img src={details.img1} alt="" />
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
