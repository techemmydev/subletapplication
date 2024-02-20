import React from "react";
import heropicture from "../../My_Component/HeroPhoto/Herophoto.module.css";
const Herophoto = () => {
  return (
    <section className={heropicture.hero_section}>
      <main className={heropicture.maincontainer}>
        <div className={heropicture.imgcontainer1}>
          <div className={heropicture.dotted}>
            <div className={heropicture.image1laptop}></div>
          </div>
        </div>

        <div className={heropicture.imgcontainer2}>
          <div className={heropicture.image2youngman}></div>
        </div>

        <div className={heropicture.imgcontainer3}>
          <div className={heropicture.dotted2}>
            <div className={heropicture.image3sittinggirl}></div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Herophoto;
