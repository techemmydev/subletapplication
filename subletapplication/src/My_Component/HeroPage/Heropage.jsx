import React from "react";
import herostyle from "../../My_Component/HeroPage/Hero.module.css";
import Button from "../ButtonComponent/Button";
import { Link } from "react-router-dom";

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

          <Button
            style={{
              padding: "28px, 42px, 28px, 42px",
              borderRadius: "12px",
              border: "2px solid #0bdaa6",
              marginTop: "30px",
              width: "249px",
              height: "60px",
              fontFamily: "Roboto",
              backgroundColor: "#b3f4e3",
              // color: "red",
              fontSize: "20px",
              fontWeight: "500",
              lineHeight: "20px",
              letterSpacing: "0em",
            }}
            hoverStyle={{
              backgroundColor: " #0bdaa6",
              color: "white",
              transition: "1s",
            }}
          >
            <Link to="/signup" className={herostyle.free}>
              START NOW, IT’S FREE
            </Link>
          </Button>
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
