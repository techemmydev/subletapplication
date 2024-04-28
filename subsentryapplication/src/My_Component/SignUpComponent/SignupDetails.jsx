import React from "react";
import style from "../../My_Component/SignUpComponent/Signupdetail.module.css";
// import SubletLogo from "../SubletLogo/SubletLogo";
import { useState } from "react";
import Google from "../LoginComponent/Google";
import { Link } from "react-router-dom";
import Button from "../ButtonComponent/Button";

import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { setuserDetailsInformations } from "../../Redux/slice/AlluserValueSlice";
import { useSelector, useDispatch } from "react-redux";

const SignupDetails = () => {
  const { userInformationDetails } = useSelector((state) => state.payment);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegisterFullName = (e) => {
    dispatch(
      setuserDetailsInformations({
        ...userInformationDetails,
        FullName: e.target.value,
      })
    );
  };

  const handleRegisterEmail = (e) => {
    dispatch(
      setuserDetailsInformations({
        ...userInformationDetails,
        userEmail: e.target.value,
      })
    );
  };
  const handleRegisterPassword = (e) => {
    dispatch(
      setuserDetailsInformations({
        ...userInformationDetails,
        userPassword: e.target.value,
      })
    );
  };
  const handleRegisterConfirmedPassword = (e) => {
    dispatch(
      setuserDetailsInformations({
        ...userInformationDetails,
        ConfirmedPassword: e.target.value,
      })
    );
  };
  return (
    <div className={style.container}>
      <div>
        <div className={style.logocontent}>
          {/* <SubletLogo /> */}
          <p>Sign up to your account</p>
          <h5>
            Already have an account ?{" "}
            <span>
              <Link to="/login" style={{ color: " rgb(145, 13, 34)" }}>
                Sign in
              </Link>
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
                  value={userInformationDetails.FullName}
                  onChange={handleRegisterFullName}
                />
              </div>
              <div>
                <label htmlFor="email" id="email">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder=" Email address"
                  required
                  value={userInformationDetails.userEmail}
                  onChange={handleRegisterEmail}
                />
              </div>
              <div>
                <label htmlFor="password" id="password">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder=" input your password"
                  required
                  value={userInformationDetails.userPassword}
                  onChange={handleRegisterPassword}
                />
              </div>
              <div>
                <label htmlFor="confirmed" id="confirmed">
                  Confirm password
                </label>
                <input
                  // type="password"
                  type={showPassword ? "text" : "password"}
                  placeholder=" confirm password"
                  required
                  value={userInformationDetails.ConfirmedPassword}
                  onChange={handleRegisterConfirmedPassword}
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
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <Button
                style={{
                  width: "100%",
                  color: "white",
                  backgroundColor: " #CC8F99",
                }}
              >
                sign up
              </Button>
            </Link>
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
