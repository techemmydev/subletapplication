import React from "react";
import style from "../RecieveAlert/Alert.module.css";

const RecieveAlert = () => {
  return (
    <div className={style.addimage_container}>
      <div className={style.addimage_container1}>
        <div className={style.addimage_container_flexbox}>
          <div className={style.addimage_box}>
            <div>
              <p>NO IMAGE AVAILABLE</p>
            </div>
          </div>
          <div>
            <form action="" className={style.labels}>
              <div className={style.emailBox}>
                <label htmlFor="Alert">
                  How would you like to receive alerts
                </label>
                <input type="email" placeholder="Email" required />
              </div>
              <div>
                <input type="text" placeholder="(Optional)" required />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecieveAlert;
