import React, { useState } from "react";
import style from "../AddimageService/addingimage.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import Icons from "./Icons";
import { useSelector } from "react-redux";

const Addimage = () => {
  const { selectedCompany } = useSelector((state) => state.companyIcon);

  const [showIcons, setShowIcons] = useState(false);
  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  return (
    <div className={style.addimage_container}>
      <div className={style.addimage_container1}>
        <div className={style.addimage_container_flexbox}>
          <div className={style.addimage_box}>
            <div>
              {selectedCompany && selectedCompany.icons ? (
                <img src={selectedCompany.icons} alt="show image here" /> // Display the selected icon if it exists
              ) : (
                <span>NO IMAGE AVAILABLE</span>
              )}
            </div>
          </div>
          <div className={style.box_feild}>
            <form action="" className={style.labels}>
              <div>
                <label htmlFor="Company">Company:</label>
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
                <label htmlFor="Description">Description:</label>
                <input type="text" placeholder="(Optional)" required />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addimage;
