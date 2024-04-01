import React from "react";
import Button from "../ButtonComponent/Button";
import style from "../3In 1 component/manage.module.css";
import { Link } from "react-router-dom";
import Testimonial from "../TestimonialComponent/Testimonial";
const Manage_subscriptions = () => {
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
              src="/src/assets/Subletimages/oINXW1NLasVKOhD9h9TB5IhM8TY.webp"
              alt=""
              width={"70%"}
            />
          </div>
          <div className={style.Manage_subscriptions_heading}>
            <h1>Take control of your subscriptions</h1>
            <p>
              Rocket Money identifies your subscriptions to help you stop paying
              for things you no longer need. Your concierge is there when you
              need them to cancel unwanted subscriptions so you don't have to.
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
          <h1>Your subscription control center</h1>
          <p>
            Its hard to keep track of subscriptions these days. We bring them
            together in a single list so you never lose track of what you're
            paying for.
          </p>
        </div>
        <div>
          <h1>Stay on top of upcoming bills</h1>
          <p>
            Our members rave about our recurring view that helps them stay on
            top of what's due, pay bills on time and avoid late fees and
            overdrafts.
          </p>
        </div>
        <div>
          <h1>Let us cancel unwanted subscriptions for you</h1>
          <p>
            We've cancelled nearly 2.5 million subscriptions on behalf of our
            members. Let us save you time and hassle by canceling services so
            you don't have to.
          </p>
        </div>
      </div>
      <Testimonial />
    </>
  );
};

export default Manage_subscriptions;
