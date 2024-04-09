import React from "react";
import SubletLogo from "../../../../My_Component/SubletLogo/SubletLogo";
import style from "../SidebarDashboard/sidebardashboard.module.css";
import { MdOutlineDashboard } from "react-icons/md";
import { IoCalendarClearOutline } from "react-icons/io5";
import { GoRepo } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
const SidebarDashboard = () => {
  const location = useLocation();
  console.log(location);
  function isActive(routes) {
    return location.pathname === routes;
  }
  return (
    <div className={style.navDashboard_container}>
      <div className={style.navDashboard_container_logoflex}>
        {/* <div>
          <SubletLogo />
        </div> */}

        <div className={style.navDashboard_container_headingtitle}>
          <h1>Subsentry</h1>
          <p>Dashboard</p>
        </div>

        <div className={style.SidebarDashboard_Navidation_container}>
          <ul className={style.SidebarDashboard_Ul}>
            <Link
              to="/dashboard"
              style={{
                color: isActive("/dashboard") ? "white" : "#D4D5D9",
                fontWeight: isActive("/dashboard") ? "700" : "600",
              }}
            >
              <li>
                <MdOutlineDashboard style={{ fontSize: "25px" }} />{" "}
                <span> Dashboard </span>
              </li>
            </Link>
            <Link
              to="/calender"
              style={{
                color: isActive("/calender") ? "white" : "#D4D5D9",
                fontWeight: isActive("/calender") ? "700" : "600",
              }}
            >
              <li>
                <IoCalendarClearOutline style={{ fontSize: "25px" }} />
                <span> Calendar </span>
              </li>
            </Link>
            <Link
              to="/report"
              style={{
                color: isActive("/report") ? "white" : "#D4D5D9",
              }}
            >
              <li>
                <GoRepo style={{ fontSize: "25px" }} />
                <span> Report </span>
              </li>
            </Link>
            <Link
              to="/settings"
              style={{
                color: isActive("/settings") ? "white" : "#D4D5D9",
              }}
            >
              <li>
                <CiSettings style={{ fontSize: "25px" }} />{" "}
                <span> Settings </span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarDashboard;
