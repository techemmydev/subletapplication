import React from "react";
import style from "../UserAmountComponent/useramount.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const UserSummary = () => {
  const { selectedCompany } = useSelector((state) => state.companyIcon);
  const { nextPaymentDate, billingCycle, autoRenew, amountSubscribe } =
    useSelector((state) => state.payment);
  // const dispatch = useDispatch();
  const { unit } = billingCycle;
  // const { userEmail, userPhoneNumber } = userInformationDetails;
  const isDataAvailable =
    selectedCompany || nextPaymentDate || billingCycle || autoRenew || unit;

  if (!isDataAvailable) {
    return null;
  }
  const [showAll, SetShowAll] = useState(false);
  const show = () => {
    SetShowAll(!showAll);
  };

  return (
    <>
      <div className={style.showAlladditem} onClick={show}>
        {showAll ? <h5>Hide Summary details</h5> : <h5>showing All</h5>}
        {showAll ? (
          <div className={style.showAll}>
            <div className={style.showAll_container}>
              <div className={style.flex_center}>
                <img src={selectedCompany.icons ? selectedCompany.icons : ""} />
              </div>
              <div className={`${style.flex_center} ${style.flex_details}`}>
                <h4>{selectedCompany ? selectedCompany.name : ""}</h4>
              </div>
              <div className={`${style.flex_center} ${style.flex_details}`}>
                <h3> {` ${nextPaymentDate ? nextPaymentDate : ""}`}</h3>
              </div>
              <div className={`${style.flex_center} ${style.flex_details}`}>
                <h4>{unit ? unit : ""}</h4>
              </div>
              <div className={`${style.flex_center} ${style.flex_details}`}>
                <h4>{autoRenew ? autoRenew : ""}</h4>
              </div>
              <div className={`${style.flex_center} ${style.flex_details}`}>
                <h4>{amountSubscribe ? amountSubscribe : ""}</h4>
              </div>
              {/* <div className={style.flex_center}>
                <h6>t</h6>
              </div> */}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default UserSummary;
