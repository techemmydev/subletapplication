import React from "react";
import style from "../UserDashboardOverview/userDashboard.module.css";
import SidebarDashboard from "../userComponentfolder/SidebarDashboard/SidebarDashboard";
import NavbarDashboard from "../userComponentfolder/NavDashboard/NavbarDashboard";
const UserDashboard = () => {
  return (
    <section className={style.user_container_box}>
      <div className={style.container1}>
        <SidebarDashboard />
      </div>
      <div className={style.container2}>
        <NavbarDashboard />
      </div>
    </section>
  );
};

export default UserDashboard;
{
}
