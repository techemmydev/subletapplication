import React from "react";
import style from "../../My_ScreenPages/RegisterPage/registersceen.module.css";

import SignupDetails from "../../My_Component/SignUpComponent/SignupDetails";
const RegisterScreen = () => {
  return (
    <main className={style.screen_container}>
      <div className={style.screen_container2}>
        <div className={style.screen_flexbox1}>
          <div className={style.screen_flexbox1_content}>
            <h1>Welcome to Sublet</h1>
            <p>
              Navigate effortlessly and manage your alerts with a user-friendly
              interface.
            </p>
          </div>
          <div className={style.image_container}>
            <img
              src="/src/assets/Subletimages/undraw_hello_re_3evm 2.png"
              alt=""
              style={{ width: "60%" }}
            />
          </div>
        </div>
        <div className={style.screen_flexbox2}>
          <div>
            <SignupDetails />
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterScreen;
