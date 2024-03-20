import React from "react";
import style from "../UserAmountComponent/useramount.module.css";
import Button from "../../../../My_Component/ButtonComponent/Button";

import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
const Useramount = () => {
  const { amountsubscribed, dolloarAmount } = useSelector(
    (state) => state.companyIcon
  );
  return (
    <div className={style.Amount_container}>
      <div className={style.Amount_container_body}>
        <div className={style.amountIcon}>
          <div>
            <img src="/src/assets/SubletImages/sAmount.svg" alt="" />
          </div>
        </div>
        <div>
          <h3>{amountsubscribed}</h3>
          <p>Subscription</p>
        </div>
      </div>
      <div className={style.Amount_container_body}>
        <div className={style.amountIcon}>
          <div>
            <img
              src="/src/assets/SubletImages\healthicons_dollar-negative.svg"
              alt=""
            />
          </div>
        </div>
        <div>
          <h3>₦{dolloarAmount}</h3>
          <p>Monthly Revenue</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div>
          <Link style={{ textDecoration: "none" }} to="/addservices">
            <Button
              style={{
                width: "121px",
                height: "43px",
                padding: "4px 21px 4px 21px",
                color: "white",
                borderRadius: "12px",
                boxShadow: "0px 2px 2px 0px #0000001A",
              }}
            >
              <FaPlusCircle /> <span> New</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Useramount;
