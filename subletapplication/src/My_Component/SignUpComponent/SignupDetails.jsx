import React from "react";
import style from "../../My_Component/SignUpComponent/Signupdetail.module.css";
import SubletLogo from "../SubletLogo/SubletLogo";
// import Btn from "../ContactBtn/Btn";
import Google from "../LoginComponent/Google";
import { Link } from "react-router-dom";
import Btn from "../ContactBtn/Btn";

const SignupDetails = () => {
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
              <Link>Sign in</Link>
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
                  type="password"
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
                  placeholder=" confirm password"
                  required
                />
              </div>
            </div>
          </form>
          <div style={{ marginLeft: "10px" }}>
            <Link>
              {" "}
              <Btn>sign up</Btn>{" "}
            </Link>
          </div>

          <div className={style.or}>
            <div className={style.frameline}></div>
            <p className={style.framelineparagraph}>or sign up</p>
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
