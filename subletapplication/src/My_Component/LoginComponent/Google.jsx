import React from "react";
import styles from "../../My_Component/LoginComponent/google.module.css";
const Google = () => {
  return (
    <div>
      <div className={styles.inputicon}>
        <button>
          <img
            src="/src/assets/SubletImages/googleicon.png"
            alt="messages"
            className={styles.goo}
          />{" "}
          <span className={styles.spans}>google</span>
        </button>
        <button>
          <img
            src="/src/assets/SubletImages/facebookicon.png"
            alt="messages"
            className={styles.fb}
          />{" "}
          <span className={styles.spans}>facebook</span>
        </button>
      </div>
    </div>
  );
};

export default Google;
