import React from "react";
import style from "../paymentservice/pay.module.css";

import { useSelector, useDispatch } from "react-redux";
import {
  setNextPaymentDate,
  setBillingCycle,
  setAutoRenew,
} from "../../../../Redux/slice/paymentSlice";
const PaymentDate = () => {
  const { selectedCompany } = useSelector((state) => state.companyIcon);

  const { nextPaymentDate, billingCycle, autoRenew } = useSelector(
    (state) => state.payment
  );
  const dispatch = useDispatch();

  const handleNextPaymentDateChange = (e) => {
    dispatch(setNextPaymentDate(e.target.value));
  };

  const handleBillingCycleValueChange = (e) => {
    dispatch(setBillingCycle({ ...billingCycle, value: e.target.value }));
  };

  const handleBillingCycleUnitChange = (e) => {
    dispatch(setBillingCycle({ ...billingCycle, unit: e.target.value }));
  };

  const handleAutoRenewChange = (e) => {
    dispatch(setAutoRenew(e.target.value));
  };

  return (
    <div className={style.addimage_container}>
      <div className={style.addimage_container1}>
        <div className={style.addimage_container_flexbox}>
          <div className={style.addimage_box}>
            <div>
              <img src={selectedCompany.icons} alt="show image here" />
            </div>
          </div>
          <div>
            <form action="" className={style.labels}>
              <div>
                <label htmlFor="Company">Next payment date </label>
                <input
                  type="text"
                  placeholder="Next payment date"
                  value={nextPaymentDate}
                  onChange={handleNextPaymentDateChange}
                />
              </div>
              <div className={style.flexinput}>
                <label htmlFor="Company">Billing cycle</label>
                <input
                  type="text"
                  placeholder="1"
                  value={billingCycle.value}
                  onChange={handleBillingCycleValueChange}
                />
                <select
                  value={billingCycle.unit}
                  onChange={handleBillingCycleUnitChange}
                >
                  <option value="Monthly">Monthly</option>
                  <option value="yearly">yearly</option>
                  <option value="daily">daily</option>
                </select>
              </div>

              <div>
                <label htmlFor="Does it Auto Renew">Does it Auto Renew</label>
                <input
                  type="text"
                  placeholder="(Optional)"
                  required
                  value={autoRenew}
                  onChange={handleAutoRenewChange}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDate;
