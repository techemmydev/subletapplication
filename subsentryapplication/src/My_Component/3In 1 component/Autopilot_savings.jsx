import React from "react";
import Button from "../ButtonComponent/Button";
import style from "../3In 1 component/manage.module.css";
import { Link } from "react-router-dom";
import Testimonial from "../TestimonialComponent/Testimonial";
const Autopilot_savings = () => {
  return (
    <>
      <div className={style.Manage_subscriptions_container1}>
        <div className={style.Manage_subscriptions_container2}>
          <div className={style.Manage_subscriptions_container3}>
            <div className={style.Manage_subscriptions_containerimg}></div>
            {/* <img
              src="/SubletImages/5DkTjyeV6QkNskjaRCtmTsHgfSw.webp"
              alt=""
              width={"79%"}
              style={{ borderRadius: "12px" }}
            /> */}
          </div>
          <div className={style.Manage_subscriptions_heading}>
            <h1 className={style.Manage1}>
              Put Your Savings On Track with Subsentry
            </h1>
            <p className={style.Manage2}>
              Subsentry smart savings accounts make saving money effortless. We
              analyze your accounts to determine the optimal time to save, so
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
            Subsentry smart savings deposits are housed in your own account at
            our FDIC insured banking partner.
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
