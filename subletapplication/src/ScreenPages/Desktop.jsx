import { Link } from "react-router-dom";
import Button from "../component/Button";
import styles from "./Desktop.module.css";

const Desktop = (props) => {
  const { joinus } = props;
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
              <div className={styles.inputicon}>
                <button>
                  <img
                    src="/src/assets/googleicon.png"
                    alt="messages"
                    className={styles.goo}
                  />{" "}
                  <span className={styles.spans}>google</span>
                </button>
                <button>
                  <img
                    src="/src/assets/facebookicon.png"
                    alt="messages"
                    className={styles.fb}
                  />{" "}
                  <span className={styles.spans}>facebook</span>
                </button>
              </div>
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
                    type="checkbox"
                    name=""
                    id=""
                    className={styles.frameInput1}
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
