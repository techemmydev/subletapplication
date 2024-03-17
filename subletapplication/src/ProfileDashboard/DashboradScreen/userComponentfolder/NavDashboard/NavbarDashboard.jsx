import React from "react";
import style from "../NavDashboard/Navdashboard.module.css";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import LogoutIcon from "../UserLogoout/LogouIcon";
import Userpicture from "../UserPicture/Userpicture";
const NavbarDashboard = () => {
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
          <img
            src="/src/assets/SubletImages/emojione_flag-for-nigeria.svg"
            alt=""
          />
        </div>

        <div>
          <LogoutIcon />
        </div>
        <div>
          <IoIosNotificationsOutline
            style={{ fontSize: "20px", color: "#C7C8CC" }}
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

          <div>
            <MdOutlineKeyboardArrowDown style={{ color: "#C7C8CC" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;
