import React from "react";
import style from "../../My_ScreenPages/ResetPassword/reset.module.css";
import Button from "../../My_Component/ButtonComponent/Button";
import { Link } from "react-router-dom";
const ResetPassword = () => {
  return (
    <main
      className={style.main}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          width: "500px",
          height: "500px",
          //   backgroundColor: "orangered",
          display: "flex",
          alignItems: "center",

          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "130px",
            height: "132px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#E7FBF6",
            borderRadius: "50%",
          }}
        >
          <img
            src="/src/assets/Subletimages/vectorlock.png"
            alt=""
            style={{ width: "40px" }}
          />
        </div>
        <div className={style.forgotpassword}>
          <h1>Forgot your password</h1>
          <p>Enter your e-mail to reset it</p>
        </div>
        <div className={style.forgotpassword_input}>
          <label htmlFor="Email address">Email address</label>
          <input
            type="email"
            name=""
            id=""
            placeholder="Input your Email address"
          />
        </div>
        <div>
          <Link className={style.submit} to="reset">
            <Button
              style={{
                width: "304px",
                height: "54px",
                padding: "14px, 20px, 14px, 20px",
                borderRadius: "24px",
              }}
            >
              Confirm
            </Button>
          </Link>
        </div>
        <div>
          <Link className={style.forgotpassword_link}>
            <p>Return to login screen</p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ResetPassword;
