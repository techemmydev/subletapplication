import React from "react";
import Button from "../ButtonComponent/Button";
import style from "../3In 1 component/manage.module.css";
import { Link } from "react-router-dom";
import Testimonial from "../TestimonialComponent/Testimonial";
const Spending_insights = () => {
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
              // backgroundColor: "yellowgreen",
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
              src="/src/assets/Subletimages/JnRnEAbhoVj83rNnOSxDCS2Fxw.webp"
              alt=""
              width={"70%"}
            />
          </div>
          <div className={style.Manage_subscriptions_heading}>
            <h1>Stay on top of your spending</h1>
            <p>
              Get an effortless breakdown of your finances to see where your
              money is going and how to improve. We’ll notify you of important
              events that need your attention so you’re never caught off guard.
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
          <h1>Supercharge your transaction data</h1>
          <p>
            Rocket Money connects your bank accounts and instantly identifies
            your top spending categories.
          </p>
        </div>
        <div>
          <h1>Spending insights help you reach your goals</h1>
          <p>
            Identify areas where you can adjust your spending habits to increase
            your savings and prepare for the future.
          </p>
        </div>
        <div>
          <h1>Real-time alerts keep you informed</h1>
          <p>
            Rocket Money will notify you about upcoming charges or when your
            balance is low to help you avoid overdrafts and late fees.
          </p>
        </div>
      </div>
      <Testimonial />
    </>
  );
};

export default Spending_insights;
