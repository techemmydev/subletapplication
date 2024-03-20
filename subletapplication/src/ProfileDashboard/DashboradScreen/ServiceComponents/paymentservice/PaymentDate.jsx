import React from "react";
import style from "../paymentservice/pay.module.css";
import { useSelector } from "react-redux";
// import { Outlet } from "react-router-dom";
const PaymentDate = () => {
  const { selectedCompany } = useSelector((state) => state.companyIcon);
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
                <input type="text" placeholder="Next payment date" />
              </div>
              <div className={style.flexinput}>
                <label htmlFor="Company">Billing cycle</label>

                <input type="text" placeholder="1" />
                <input type="text" placeholder="Month" />
              </div>

              <div>
                <label htmlFor="Does it Auto Renew">Does it Auto Renew</label>
                <input type="text" placeholder="(Optional)" required />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <Outlet /> */}
    </div>
  );
};

export default PaymentDate;
