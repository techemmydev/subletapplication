import React from "react";
import style from "../UserDashboardOverview/userDashboard.module.css";
import SidebarDashboard from "../userComponentfolder/SidebarDashboard/SidebarDashboard";
import NavbarDashboard from "../userComponentfolder/NavDashboard/NavbarDashboard";
import Useramount from "../userComponentfolder/UserAmountComponent/Useramount";
const UserDashboard = () => {
  return (
    <section>
      <div className={style.user_container_box}>
        <div className={style.container1}>
          <SidebarDashboard />
        </div>
        <div className={style.container2}>
          <NavbarDashboard />
          <div className={style.container3}>
            <div>
              <Useramount />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
{
}
