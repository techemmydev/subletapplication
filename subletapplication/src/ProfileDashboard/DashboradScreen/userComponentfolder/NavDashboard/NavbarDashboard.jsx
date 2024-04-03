import React from "react";
import style from "../NavDashboard/Navdashboard.module.css";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import LogoutIcon from "../UserLogoout/LogouIcon";
import Userpicture from "../UserPicture/Userpicture";
import { Closein } from "../../../../Redux/slice/ModalSlice";
import { useSelector, useDispatch } from "react-redux";
import HomePage from "../../../../My_ScreenPages/LandingPage/Landingpage";
const NavbarDashboard = () => {
  const { loginIn } = useSelector((state) => state.modal);
  function logout() {
    dispatch(Closein());
  }
  const dispatch = useDispatch();
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
          {" "}
          <LogoutIcon />
        </div>
        {/* <div>{loginIn ? <LogoutIcon next={logout} /> : <HomePage />}</div> */}
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
