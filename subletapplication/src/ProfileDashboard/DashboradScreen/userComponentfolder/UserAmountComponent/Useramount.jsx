import React from "react";
import style from "../UserAmountComponent/useramount.module.css";
import Button from "../../../../My_Component/ButtonComponent/Button";
import { BiChevronRight } from "react-icons/bi";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import UserSummary from "./UserSummary";
import {
  addUserSummary,
  removeUserSummary,
} from "../../../../Redux/slice/UserSummariesSlice";
const Useramount = () => {
  const handleAddSummary = () => {
    const newSummaryData = {
      /* Your summary data here */
    };
    dispatch(addUserSummary(newSummaryData));
    console.log(newSummaryData);
  };

  // const handleRemoveSummary = (summary) => {
  //   dispatch(removeUserSummary(summary));
  // };
  const dispatch = useDispatch();
  const MyuserSummaries = useSelector(
    (state) => state.userSummary.userSummaries
  );
  console.log(userSummaries);

  const { billingCycle } = useSelector((state) => state.payment);
  const { value } = billingCycle;
  const { amountSubscribe } = useSelector((state) => state.payment);
  return (
    <>
      <div className={style.Amount_container}>
        <div className={style.Amount_container_body}>
          <div className={style.amountIcon}>
            <div>
              <img src="/SubletImages/s.svg" alt="" />
            </div>
          </div>
          <div>
            <h3>{value ? value : <p> Subscription</p>}</h3>
          </div>
          <div>
            <BiChevronRight className={style.leftArrow} />
          </div>
        </div>
        <div className={style.Amount_container_body}>
          <div className={style.amountIcon}>
            <div>
              <img src="/SubletImages\naira.svg" alt="" />
            </div>
          </div>
          <div>
            <h3>
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
                next={handleAddSummary}
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
              {/* <Button
                next={() =>
                  handleRemoveSummary(userSummaries[userSummaries.length - 1])
                }
              >
                Remove Service
              </Button> */}
            </Link>
            {/* <Button
              next={() =>
                handleRemoveSummary(userSummaries[userSummaries.length - 1])
              }
            >
              Remove Service
            </Button> */}
          </div>
        </div>
      </div>
      <div>
        {MyuserSummaries.map((summary, index) => (
          <UserSummary key={index} summary={summary} /> // Render UserSummary component based on state data
        ))}
      </div>
    </>
  );
};

export default Useramount;
