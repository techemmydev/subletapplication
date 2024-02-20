import React from "react";
import herostyle from "../../My_Component/HeroPage/Hero.module.css";
import Freebutton from ".././FreeButton/Freebutton";
const Heropage = () => {
  return (
    <section className={herostyle.hero_section}>
      <div className={herostyle.ellipse}>
        <img src="./src/assets/SubletImages/Ellipse.png" alt="messages" />
      </div>
      <main className={herostyle.maincontainer}>
        <div>
          <h3>welcome</h3>
          <h1>SUBLET</h1>
          <p>
            Our subscription alert app is designed to keep you ahead of the
            curve, delivering instant notifications for new deals, updates, and
            offers from your favorite brands and services.
          </p>
          <Freebutton />
        </div>
        <div className={herostyle.div2}></div>
        <div className={herostyle.imagecontainer}>
          <div className={herostyle.div1}></div>
        </div>
      </main>
    </section>
  );
};

export default Heropage;
