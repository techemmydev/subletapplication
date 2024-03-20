import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Button from "../../My_Component/ButtonComponent/Button";
import styles from "../../My_ScreenPages/LoginPage/Desktop.module.css";
import Google from "../../My_Component/LoginComponent/Google";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import Navbar from "../../My_Component/NavigationBar/Navbar";
const Desktop = () => {
  const [Ischeck, SetIscheckbox] = useState(false);
  const ClickedCheckedbox = () => {
    SetIscheckbox(!Ischeck);
  };
  const [person, setPerson] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    // console.log(name);
    setPerson({ ...person, [name]: value });
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Navbar />
      <main className={styles.welcomepagescreen}>
        <div className={styles.innerwelcompagescreencontainer}>
          <div className={styles.secondinnercontainer}>
            <div className={styles.welcomepagescreenContent}>
              <h1>welcome back</h1>
              <p>Log in to your account </p>
            </div>

            <div className={styles.detailsinputcontainer}>
              <div className={styles.inputformcontainer}>
                <Google />
                <div className={styles.or}>
                  <div className={styles.frameline}></div>
                  <p className={styles.framelineparagraph}>or</p>
                  <div className={styles.frameline}></div>
                </div>
                <div className={styles.input_Details}>
                  <input
                    type="email"
                    placeholder="email"
                    required
                    className={styles.frameInner}
                    name="email"
                    id="email"
                    value={person.email}
                    onInput={handleChange}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    required
                    className={styles.frameInner}
                    name="password"
                    value={person.password}
                    onInput={handleChange}
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    style={{
                      color: "black",
                      position: "absolute",
                      right: "45px",
                      top: "95px",
                    }}
                  >
                    {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
                  </span>
                </div>
                <div className={styles.forgot}>
                  <div className={styles.frameInput2}>
                    <input
                      // style={{
                      //   backgroundColor: Ischeck ? "green" : "red",
                      //   width: "20px",
                      //   height: "20px",
                      // }}
                      checked={Ischeck}
                      type="checkbox"
                      name=""
                      id=""
                      onChange={(e) => ClickedCheckedbox(e.target.checked)}
                      className={styles.frameInput1}
                    />
                    <span className={styles.keep}>Keep me Logged in</span>
                  </div>

                  <div className={styles.alreadyLink}>
                    <Link to="/reset-password">
                      <span className={styles.already}>Forgot Password?</span>{" "}
                    </Link>
                  </div>
                </div>
                <div className={styles.welcomeButton}>
                  <Link className={styles.login_link} to="/dashboard">
                    <Button
                      style={{
                        color: "white",
                      }}
                    >
                      log in
                    </Button>
                  </Link>
                </div>

                <div className={styles.dontHaveAnContainer}>
                  <span>{`Don’t have an account ? `}</span>
                  <span className={styles.signUp}>
                    {" "}
                    <Link to="/signup"> Sign up</Link>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </main>
    </>
  );
};

export default Desktop;
