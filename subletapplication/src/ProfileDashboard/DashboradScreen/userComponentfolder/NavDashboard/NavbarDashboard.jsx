import React from "react";
import style from "../NavDashboard/Navdashboard.module.css";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

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
          <IoIosNotificationsOutline />
        </div>
        <div></div>
        <div>
          <Userpicture />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;
