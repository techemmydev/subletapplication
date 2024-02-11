import React from "react";
import herosectionstyle from "./herosection.module.css";

const Herosection = () => {
  return (
    <section className={herosectionstyle.hero_section}>
      <main className={herosectionstyle.maincontainer}>
        <div className={herosectionstyle.imgcontainer1}>
          <div className={herosectionstyle.image1laptop}></div>
        </div>

        <div className={herosectionstyle.imgcontainer2}>
          <div className={herosectionstyle.image2youngman}></div>
        </div>

        <div className={herosectionstyle.imgcontainer3}>
          <div className={herosectionstyle.image3sittinggirl}></div>
        </div>
      </main>
    </section>
  );
};

export default Herosection;
