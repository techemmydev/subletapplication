import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../../My_Component/ButtonComponent/Button";
import styles from "../../My_ScreenPages/LoginPage/Desktop.module.css";
import Google from "../../My_Component/LoginComponent/Google";

const Desktop = (props) => {
  const { joinus } = props;
  const [Ischeck, SetIscheckbox] = useState(false);

  const ClickedCheckedbox = () => {
    SetIscheckbox(!Ischeck);
  };

  return (
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
                />
                <input
                  type="password"
                  placeholder="password"
                  required
                  className={styles.frameInner}
                />
              </div>
              <div className={styles.forgot}>
                <div className={styles.frameInput2}>
                  <input
                    style={{
                      backgroundColor: Ischeck ? "green" : "red",
                      width: "20px",
                      height: "20px",
                    }}
                    checked={Ischeck}
                    type="checkbox"
                    name=""
                    id=""
                    onClick={(e) => ClickedCheckedbox(e.target.checked)}
                  />
                  <span className={styles.keep}>Keep me Logged in</span>
                </div>

                <div>
                  {" "}
                  <span className={styles.already}>Forgot Password?</span>
                </div>
              </div>
              <div className={styles.welcomeButton}>
                <Button sign={joinus} className="show">
                  sign in
                </Button>
              </div>

              <div className={styles.dontHaveAnContainer}>
                <span>{`Don’t have an account ? `}</span>
                <span className={styles.signUp}>
                  {" "}
                  <Link to="/join"> Sign up</Link>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Desktop;
