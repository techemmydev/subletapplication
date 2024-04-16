import React from "react";
import style from "../NavDashboard/Navdashboard.module.css";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import LogoutIcon from "../UserLogoout/LogouIcon";
import Userpicture from "../UserPicture/Userpicture";
// import { Setnotify } from "../../../../Redux/slice/AlluserValueSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
const NavbarDashboard = () => {
  const { notify } = useSelector((state) => state.payment);
  const { userInformationDetails } = useSelector((state) => state.payment);
  const sliceName = userInformationDetails.userEmail.slice(0, 10);

  const [showIcons, setShowIcons] = useState(false);
  const toggleIcons = () => {
    setShowIcons(!showIcons);
    console.log(showIcons);
  };
  return (
    <div className={style.navbarDash_container}>
      <div className={style.serchInput}>
        <form action="">
          <div className={style.serchbox}>
            <CiSearch className={style.CiSearch} />

            <input type="text" placeholder="Search subscriptions" />
            <button>Search</button>
          </div>
        </form>
      </div>

      <div className={style.allnavIcon}>
        <div>
          <img src="/SubletImages/emojione_flag-for-nigeria.svg" alt="" />
        </div>
        <div>
          <LogoutIcon />
        </div>
        <div className={`${style.notify_container} `}>
          {notify ? (
            <div className={style.rednotifiation}></div>
          ) : (
            <div className={style.redback}></div>
          )}

          <IoIosNotificationsOutline
            style={{ fontSize: "25px", color: "#C7C8CC" }}
          />
        </div>

        <div style={{ height: "48px", border: "1px solid #C7C8CC" }}></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <div>
            <Userpicture />
          </div>

          <div className={style.navbarDaasuserbox}>
            <MdOutlineKeyboardArrowDown
              style={{ color: "#C7C8CC", fontSize: "30px" }}
              onClick={toggleIcons}
            />

            {showIcons ? (
              <h6 className={style.navbarDaasusername}> {sliceName} </h6>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;
