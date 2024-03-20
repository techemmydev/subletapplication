import React from "react";
import style from "../UserDashboard/dashbord.module.css";
import UserDashboard from "../ProfileDashboard/DashboradScreen/UserDashboardOverview/UserDashboard";
const Dashbord = () => {
  return (
    <div className={style.dashboard_container}>
      <UserDashboard />
    </div>
  );
};

export default Dashbord;
