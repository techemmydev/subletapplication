import React, { useState } from "react";
import style from "../AddimageService/addingimage.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import Icons from "./Icons";
import { useSelector, useDispatch } from "react-redux";

import {
  setAmountSubscribe,
  setuserDetailsDescription,
} from "../../../../Redux/slice/AlluserValueSlice";
const Addimage = () => {
  const { selectedCompany } = useSelector((state) => state.companyIcon);

  const { amountSubscribe, description } = useSelector(
    (state) => state.payment
  );

  const dispatch = useDispatch();

  const [showIcons, setShowIcons] = useState(false);
  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };
  const handleNextPaymentAmountSubscribe = (e) => {
    dispatch(setAmountSubscribe(e.target.value));
  };
  const handleUserDetailsDescription = (e) => {
    dispatch(setuserDetailsDescription(e.target.value));
  };

  return (
    <div className={style.addimage_container}>
      <div className={style.addimage_container1}>
        <div className={style.addimage_container_flexbox}>
          <div className={style.addimage_box}>
            <div>
              {selectedCompany && selectedCompany.icons ? (
                <img
                  src={selectedCompany.icons}
                  alt="Your service icon will display"
                /> // Display the selected icon if it exists
              ) : (
                <span>NO IMAGE AVAILABLE</span>
              )}
            </div>
          </div>
          <div className={style.box_feild}>
            <form action="" className={style.labels}>
              <div>
                <label htmlFor="Company">Company</label>
                <div>
                  {selectedCompany && selectedCompany.icons ? (
                    <span>{selectedCompany.name}</span>
                  ) : (
                    <span>Name</span>
                  )}
                </div>
                <div className={style.icon_div}>
                  <MdKeyboardArrowDown
                    className={style.iconarrow}
                    onClick={toggleIcons} // Call toggleIcons function on click
                  />
                </div>
              </div>
              {/* Render Icons component when showIcons is true */}
              {showIcons && <Icons />}
              <div>
                <label htmlFor="Description">Description</label>
                <input
                  type="text"
                  placeholder="Optional"
                  required
                  onChange={handleUserDetailsDescription}
                  value={description}
                />
              </div>
              <div>
                <label htmlFor="Description">
                  Enter Amount subscribed service
                </label>
                <input
                  type="text"
                  placeholder="Enter Amount .eg ₦3,600"
                  required
                  value={amountSubscribe}
                  onChange={handleNextPaymentAmountSubscribe}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addimage;
