import React from "react";
import style from "../UserDashboardOverview/userDashboard.module.css";

import Useramount from "../userComponentfolder/UserAmountComponent/Useramount";

const UserDashboard = () => {
  return (
    <section>
      <div className={style.user_container_box}>
        <div className={style.container1}>
          <div>
            <Useramount />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
