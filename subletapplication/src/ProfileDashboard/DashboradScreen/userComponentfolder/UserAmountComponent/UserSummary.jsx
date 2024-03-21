import React from "react";
import style from "../UserAmountComponent/useramount.module.css";
import { useSelector, useDispatch } from "react-redux";
const UserSummary = () => {
  const { selectedCompany } = useSelector((state) => state.companyIcon);
  const { nextPaymentDate, billingCycle, autoRenew, amountSubscribe } =
    useSelector((state) => state.payment);
  const dispatch = useDispatch();
  const { unit } = billingCycle;
  const isDataAvailable =
    selectedCompany || nextPaymentDate || billingCycle || autoRenew || unit;
  if (!isDataAvailable) {
    return null;
  }
  return (
    <>
      <div className={style.showAlladditem}>
        {" "}
        <h1>Showing All</h1>{" "}
      </div>

      <div className={style.showAll}>
        <div className={style.showAll_container}>
          <div className={style.flex_center}>
            <img src={selectedCompany.icons ? selectedCompany.icons : ""} />
          </div>
          <div className={`${style.flex_center} ${style.flex_details}`}>
            <h1>{selectedCompany ? selectedCompany.name : ""}</h1>
          </div>
          <div className={`${style.flex_center} ${style.flex_details}`}>
            <h1> {` ${nextPaymentDate ? nextPaymentDate : ""}`}</h1>
          </div>
          <div className={`${style.flex_center} ${style.flex_details}`}>
            <h1>{unit ? unit : ""}</h1>
          </div>
          <div className={`${style.flex_center} ${style.flex_details}`}>
            <h1>{autoRenew ? autoRenew : ""}</h1>
          </div>
          <div className={`${style.flex_center} ${style.flex_details}`}>
            <h1>{amountSubscribe ? amountSubscribe : ""}</h1>
          </div>
          <div className={style.flex_center}>6</div>
        </div>
      </div>
    </>
  );
};

export default UserSummary;
