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
            <h3 style={{ fontSize: "12px" }}>
              {value ? value : <p> No subscribe Subscription</p>}
            </h3>
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
            <h3 style={{ fontSize: "12px" }}>
              {amountSubscribe ? amountSubscribe : <p> Monthly Revenue</p>}
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
      <div>
        <UserSummary />
      </div>
    </>
  );
};

export default Useramount;
