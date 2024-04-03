// src/components/LogoutIcon.js
import React from "react";
// import { Closein } from "../../../../Redux/slice/ModalSlice";
// import { useSelector, useDispatch } from "react-redux";

const LogoutIcon = ({ next }) => {
  return (
    <div onClick={next}>
      <img src="/SubletImages/mdi_logout.svg" alt="" />
    </div>
  );
};

export default LogoutIcon;
