import React from "react";
import Button from "../ButtonComponent/Button";
import style from "../3In 1 component/manage.module.css";
import { Link } from "react-router-dom";

const Manage_subscriptions = () => {
  return (
    <>
      <div className={style.Manage_subscriptions_container1}>
        <div className={style.Manage_subscriptions_container2}>
          <div className={style.Manage_subscriptions_container3}>
            <div className={style.Manage_subscriptions_containerimg}></div>
            {/* <img
              src="/SubletImages/oINXW1NLasVKOhD9h9TB5IhM8TY.webp"
              alt=""
              width={"70%"}
            /> */}
          </div>
          <div className={style.Manage_subscriptions_heading}>
            <h1>Take control of your subscriptions</h1>
            <p>
              Subsentry Money identifies your subscriptions to help you stop
              paying for things you no longer need. Your concierge is there when
              you need them to cancel unwanted subscriptions so you don't have
              to.
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
    </>
  );
};

export default Manage_subscriptions;
