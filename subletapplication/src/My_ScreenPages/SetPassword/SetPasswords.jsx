import React from "react";
import style from "../../My_ScreenPages/SetPassword/setpassword.module.css";
import Button from "../../My_Component/ButtonComponent/Button";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
const Setpassword = () => {
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
            width: "120px",
            height: "130px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#E7FBF6",
            borderRadius: "50%",
          }}
        >
          <img
            src="/src/assets/Subletimages/vectorkey.png"
            alt=""
            style={{ width: "40px" }}
          />
        </div>
        <div className={style.setpassword}>
          <h1>Set your new password</h1>
          <div style={{ maxWidth: "300px", margin: "auto" }}>
            <p>
              Your new password should be different from passwords previously
              used.
            </p>
          </div>
        </div>
        <div className={style.setpassword_input}>
          <label htmlFor="Email address">Password</label>
          <input
            type="email"
            name=""
            id=""
            placeholder="Input your Email address"
          />
        </div>
        <div className={style.setpassword_input}>
          <label htmlFor="Email address">Confirm your new password</label>
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
                color: "white",
              }}
            >
              Confirm
            </Button>
          </Link>
        </div>
        <div>
          <Link className={style.forgotpassword_link} to="/login">
            <p>
              {" "}
              <IoIosArrowRoundBack /> Return to login screen
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Setpassword;
