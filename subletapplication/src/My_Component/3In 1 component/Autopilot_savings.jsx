import React from "react";
import Button from "../ButtonComponent/Button";
import style from "../3In 1 component/manage.module.css";
import { Link } from "react-router-dom";
import Testimonial from "../TestimonialComponent/Testimonial";
const Autopilot_savings = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "rgb(242, 242, 242)",
          // height: "100vh",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            //   backgroundColor: "orangered",
            padding: "2rem",
            //   height: "90vh",

            marginTop: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              marginTop: "50px",
              width: "60%",
              //   backgroundColor: "yellowgreen",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            //   style={{
            //     width: "380px",
            //     height: "700px",
            //     /* background-color: #333333; */

            //     padding: "1rem",
            //     backgroundImage: {
            //       url: "/src/assets/Subletimages/5DkTjyeV6QkNskjaRCtmTsHgfSw.webp",
            //     },
            //     /* border-radius: 10px; */
            //     backgroundRepeat: "no-repeat",
            //     backgroundPosition: "center",
            //     backgroundSize: "contain",
            //   }}
          >
            {" "}
            <img
              src="/SubletImages/boy.jpg"
              alt=""
              width={"79%"}
              style={{ borderRadius: "12px" }}
            />
          </div>
          <div className={style.Manage_subscriptions_heading}>
            <h1>Put your savings on Autopilot</h1>
            <p>
              Rocket Money smart savings accounts make saving money effortless.
              We analyze your accounts to determine the optimal time to save, so
              you reach your goals faster and avoid overdraft fees.
            </p>
            <Link to={"/signup"} style={{ textDecoration: "none" }}>
              {" "}
              <Button
                style={{
                  backgroundColor: " rgb(145, 13, 34)",
                  color: "rgb(255, 255, 255)",
                  boxShadow: "-0px 0px 10px 0px #00000040",
                }}
              >
                Sign Up
              </Button>{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className={style.Manage_subscriptions_sections}>
        <div>
          <h1>1-minute setup</h1>
          <p>
            Choose your savings goal, pick a preferred savings frequency, and
            watch your savings start to grow!
          </p>
        </div>
        <div>
          <h1>FDIC insured</h1>
          <p>
            Rocket Money smart savings deposits are housed in your own account
            at our FDIC insured banking partner.
          </p>
        </div>
        <div>
          <h1>Maintain full control</h1>
          <p>
            Your savings are your money. You can edit, pause, withdraw, or close
            your account at any time.
          </p>
        </div>
      </div>
      <Testimonial />
    </>
  );
};

export default Autopilot_savings;
