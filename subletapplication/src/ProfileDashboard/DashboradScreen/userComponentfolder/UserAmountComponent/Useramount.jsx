import React from "react";
import style from "../UserAmountComponent/useramount.module.css";
import Button from "../../../../My_Component/ButtonComponent/Button";
import { BiChevronRight } from "react-icons/bi";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import UserSummary from "./UserSummary";
const Useramount = () => {
  // const { amountsubscribed, dolloarAmount } = useSelector(
  //   (state) => state.companyIcon
  // );
  const { billingCycle } = useSelector((state) => state.payment);
  const { value } = billingCycle;
  const { amountSubscribe } = useSelector((state) => state.payment);
  return (
    <>
      <div className={style.Amount_container}>
        <div className={style.Amount_container_body}>
          <div className={style.amountIcon}>
            <div>
              <img src="/src/assets/SubletImages/sAmount.svg" alt="" />
            </div>
          </div>
          <div>
            <h3>{value ? value : <p>Total Subcribe</p>}</h3>
          </div>
          <div>
            <BiChevronRight className={style.leftArrow} />
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
            <h3>
              {amountSubscribe ? amountSubscribe : <p> Amount Subcribe</p>}
            </h3>
          </div>
          <div>
            <BiChevronRight className={style.leftArrow} />
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
                  width: "141px",
                  height: "43px",
                  padding: "4px 21px 4px 21px",
                  color: "white",
                  borderRadius: "12px",
                  boxShadow: "0px 2px 2px 0px #0000001A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#28162d",
                  fontSize: "12px",
                  gap: "5px",

                  fontFamily: "Plus Jakarta Sans",
                }}
                hoverStyle={{ backgroundColor: " grey" }}
              >
                <FaPlusCircle /> <span> Add Service</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <UserSummary />
      </div>
    </>
  );
};

export default Useramount;
