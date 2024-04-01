import React from "react";
import herostyle from "../../My_Component/HeroPage/Hero.module.css";
import Button from "../ButtonComponent/Button";
import { Link } from "react-router-dom";
import { ClassRoom } from "../../My_DataArrays/mydataArray";

import Feature2 from "../FeatureComponent/Feature2";
import Feature1 from "../FeatureComponent/Feature1";
import Servicepage from "../../My_ScreenPages/ServiceComponent/Servicepage";
const Heropage = () => {
  return (
    <>
      <section className={herostyle.hero_section}>
        <main className={herostyle.maincontainer}>
          <div>
            <div className={herostyle.boreder}> .</div>
            <h1>NotifyMe App That Works For You</h1>
            <p>
              Managing money is hard, but you don’t have to do it alone.
              NotifyMe empowers you to save more, spend less, see everything,
              and take back control of your financial life.
            </p>

            <Button
              style={{
                padding: "28px, 42px, 28px, 42px",
                borderRadius: "12px",
                // border: "2px solid #0bdaa6",
                marginTop: "30px",
                width: "249px",
                height: "60px",
                fontFamily: "Roboto",

                // backgroundColor: "#b3f4e3",
                backgroundColor: "#5b0e0e",
                // color: "red",
                fontSize: "20px",
                fontWeight: "500",
                lineHeight: "20px",
                letterSpacing: "0em",
              }}
              hoverStyle={{
                backgroundColor: "rgb(145, 13, 34)",
                color: "white",
                transition: "1s",
              }}
            >
              <Link to="/signup" className={herostyle.free}>
                START NOW, IT’S FREE
              </Link>
            </Button>
          </div>

          {/* <div className={herostyle.div2}></div> */}
          <div className={herostyle.imagecontainer}>
            <div className={herostyle.div1}></div>
          </div>
        </main>
      </section>
      <section className={herostyle.another_section}>
        <div className={herostyle.another_section_box}>
          <div className={herostyle.another_section_para}>
            {" "}
            <h1>Join 5 Million+ Members</h1>
            <p>
              We’ve worked hard for the past 5 years saving our members over $1
              billion dollars* and counting.
            </p>{" "}
          </div>
          <Link to="/signup" className={herostyle.free}>
            <Button
              style={{
                padding: "28px, 42px, 28px, 42px",
                borderRadius: "12px",

                marginTop: "30px",
                marginLeft: "80px",
                color: "#28162d",
                width: "249px",
                height: "60px",
                fontFamily: "Plus Jakarta Sans",
                border: "2px solid white",
                boxShadow: "0px 4px 4px 0px #00000040",
                backgroundColor: " white",
                fontSize: "20px",
                fontWeight: "500",
              }}
              hoverStyle={{ backgroundColor: "  #f1f6f9" }}
            >
              join now
            </Button>
          </Link>
        </div>
      </section>
      <section>
        {ClassRoom.map((items, index) => {
          if (items.feature2) {
            return (
              <div key={index}>
                <Feature2
                  img={items.img}
                  title={items.title}
                  desc={items.desc}
                  path={items.path}
                ></Feature2>
              </div>
            );
          } else {
            return (
              <div key={index}>
                <Feature1
                  img1={items.img1}
                  img2={items.img2}
                  title={items.heading}
                  desc={items.desc}
                  cardTitle1={items.cardTitle1}
                  cardTitle2={items.cardTitle2}
                  parag1={items.paragraph1}
                  parag2={items.paragraph2}
                  path={items.path}
                ></Feature1>
              </div>
            );
          }
        })}
      </section>

      <Servicepage />
    </>
  );
};

export default Heropage;
