import React from "react";
import style from "../UserAmountComponent/useramount.module.css";
import { useSelector } from "react-redux";
const UserSummary = () => {
  const { selectedCompany } = useSelector((state) => state.companyIcon);
  const { nextPaymentDate, billingCycle, autoRenew } = useSelector(
    (state) => state.payment
  );
  const { unit } = billingCycle;

  return (
    <div className={style.showAll}>
      <div className={style.showAll_container}>
        <div>
          <img src={selectedCompany.icons} alt="icons" />
        </div>
        <div>
          <h1>{selectedCompany.name}</h1>
        </div>
        <div>
          <h1>{nextPaymentDate}</h1>
        </div>
        <div>
          <h1>{unit}</h1>
        </div>
        <div>
          <h1>{autoRenew}</h1>
        </div>
        <div>6</div>
      </div>
    </div>
  );
};

export default UserSummary;
