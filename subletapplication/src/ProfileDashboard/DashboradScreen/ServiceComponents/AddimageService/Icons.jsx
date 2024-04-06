import React from "react";

import { CiSearch } from "react-icons/ci";
import style from "../AddimageService/icon.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCompany } from "../../../../Redux/slice/SubletSlice";
const Icons = () => {
  const { iconimage } = useSelector((state) => state.companyIcon);

  // const selecticon = useSelector((state) => state.companyIcon.iconimage);
  const dispatch = useDispatch();

  const handleIconClick = (id) => {
    console.log(dispatch(setSelectedCompany(id)));
  };

  return (
    <div>
      <div className={style.icon_container}>
        <div className={style.serchbox_input}>
          <CiSearch className={style.search} />
          <input type="text" placeholder="Search" />
        </div>
        <div className={style.icon_container_img}>
          {iconimage.map((items, index) => (
            <div
              key={index}
              className={style.icon_box_flex}
              onClick={() => handleIconClick(items)}
            >
              <img src={items.icons} alt="icons" width={"30%"} />
              <h4 style={{ fontSize: "13px" }}>{items.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Icons;
