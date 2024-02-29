import React from "react";
import style from "../../My_Component/SignUpComponent/Signupdetail.module.css";
import SubletLogo from "../SubletLogo/SubletLogo";
import { useState } from "react";
import Google from "../LoginComponent/Google";
import { Link } from "react-router-dom";
import Button from "../ButtonComponent/Button";

import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
const SignupDetails = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={style.container}>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          className={style.logocontent}
        >
          <SubletLogo />
          <p>Sign up to your account</p>
          <h5>
            Already have an account ?{" "}
            <span>
              <Link to="/login">Sign in</Link>
            </span>
          </h5>
        </div>
        <div>
          <form action="">
            <div className={style.SignupDetails_Input}>
              <div>
                <label htmlFor="full name" id="full name">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder=" input your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" id="email">
                  Email address
                </label>
                <input type="email" placeholder=" Email address" required />
              </div>
              <div>
                <label htmlFor="password" id="password">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder=" input your password"
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmed" id="confirmed">
                  Confirm password
                </label>
                <input
                  type="password"
                  // type={showPassword ? "text" : "password"}
                  placeholder=" confirm password"
                  required
                />
              </div>

              <span
                onClick={togglePasswordVisibility}
                style={{
                  color: "black",
                  position: "absolute",
                  right: "45px",
                  top: "62%",
                }}
              >
                {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
              </span>
            </div>
          </form>
          <div
            style={{
              marginLeft: "10px",
              marginTop: "10px",
            }}
          >
            <Link>{/* <Btn className={style.shw}>sign up</Btn> */}</Link>
            <Button
              style={{
                width: "100%",
                color: "white",
              }}
            >
              sign up
            </Button>
          </div>

          <div className={style.or}>
            <div className={style.frameline}></div>
            <p className={style.framelineparagraph}>or sign up with</p>
            <div className={style.frameline}></div>
          </div>
          <div>
            <Google />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupDetails;
