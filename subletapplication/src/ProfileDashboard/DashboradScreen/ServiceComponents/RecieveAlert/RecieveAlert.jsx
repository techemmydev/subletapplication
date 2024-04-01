import React from "react";
import style from "../RecieveAlert/Alert.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setuserDetailsInformations } from "../../../../Redux/slice/AlluserValueSlice";

const RecieveAlert = () => {
  const { selectedCompany } = useSelector((state) => state.companyIcon);
  const dispatch = useDispatch();

  const { userInformationDetails } = useSelector((state) => state.payment);

  const handleRecieveAlertOptionsEmail = (e) => {
    dispatch(
      setuserDetailsInformations({
        ...userInformationDetails,
        userEmail: e.target.value,
      })
    );
  };
  const handleRecieveAlertOptionsPhoneNumber = (e) => {
    dispatch(
      setuserDetailsInformations({
        ...userInformationDetails,

        userPhoneNumber: e.target.value,
      })
    );
  };
  return (
    <div className={style.addimage_container}>
      <div className={style.addimage_container1}>
        <div className={style.addimage_container_flexbox}>
          <div className={style.addimage_box}>
            <div>
              <img src={selectedCompany.icons} alt="service icon" />
            </div>
          </div>
          <div>
            <form action="" className={style.labels}>
              <div className={style.emailBox}>
                <label htmlFor="Alert">
                  How would you like to receive alerts
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={userInformationDetails.userEmail}
                  onChange={handleRecieveAlertOptionsEmail}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="08065593278"
                  required
                  value={userInformationDetails.userPhoneNumber}
                  onChange={handleRecieveAlertOptionsPhoneNumber}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecieveAlert;
