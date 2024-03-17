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
        <div>
          <SubletLogo />
        </div>

        <div className={style.navDashboard_container_headingtitle}>
          <h1>sublet</h1>
          <p>Dashboard</p>
        </div>

        <div className={style.SidebarDashboard_Navidation_container}>
          <ul className={style.SidebarDashboard_Ul}>
            <Link to="/dashboard">
              <li>
                <MdOutlineDashboard style={{ fontSize: "20px" }} />{" "}
                <span> Dashboard </span>
              </li>
            </Link>
            <Link
              to="/calender"
              style={{
                color: isActive("/calendar") ? "#1DBFDC" : "#D4D5D9",
              }}
            >
              <li>
                <IoCalendarClearOutline style={{ fontSize: "20px" }} />
                <span> Calendar </span>
              </li>
            </Link>
            <Link to="/report">
              <li>
                <GoRepo style={{ fontSize: "20px" }} />
                <span> Report </span>
              </li>
            </Link>
            <Link to="/settings">
              <li>
                <CiSettings style={{ fontSize: "20px" }} />{" "}
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
