import React from "react";
import style from "../UserAmountComponent/useramount.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Button from "../../../../My_Component/ButtonComponent/Button";

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
        {showAll ? <h4>Hide Summary details</h4> : <h5>showing All</h5>}
        {showAll ? (
          <div className={style.showAll}>
            <table>
              <thead>
                <tr>
                  <th>Brand Icon </th>
                  <th>Brand Name </th>
                  <th>Renewal date</th>
                  <th>Billing cycle</th>
                  <th>Price</th>
                  <th>Cancel Subscription</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data 1</td>
                  <td>Data 2</td>
                  <td>Data 3</td>
                  <td>Data 4</td>
                  <td>Data 5</td>
                  <td>
                    <Button>cancle</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default UserSummary;
