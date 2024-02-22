import React from "react";
import styles from "../ContactPage/contactus.module.css";
const Contactus = () => {
  return (
    <>
      <main
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#E7FBF6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <section
          style={{
            width: "80%",
            // backgroundColor: "red",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              // backgroundColor: "orangered",
              width: "60%",
              height: "400px",
              padding: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <div>
              <h1 className={styles.h1}>Contact Us</h1>
              <p className={styles.p}>
                Email, call, or complete the form so as Sublet can solve
                whatever subscription problem.
              </p>
              <p className={styles.p}>Sublet@gmail.com</p>
              <p className={styles.p}>+234 703 856 3487 , +234 803 922 3488</p>
            </div>
            <div style={{ display: "flex", gap: "10px", overflow: "hidden" }}>
              <div className={styles.h2}>
                <h2>Customer support</h2>
                <p>
                  Our support team is available around the clock to address any
                  concerns or queries you may have
                </p>
              </div>
              <div className={styles.h2}>
                <h2>Feedback and suggestions</h2>
                <p>
                  We value your feedback and are continuously working to improve
                  Sublet. Your input is crucial in shaping the future of Sublet.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "brown", width: "60%", height: "400px" }}
          >
            <div>2</div>
          </div>
        </section>
      </main>
      <aside className={styles.mapcontainerflex}>
        <div
          style={{
            display: "flex",
            backgroundColor: "red",
            width: "80%",
            height: "70vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "40%",
              height: "400px",
              backgroundColor: "orangered",
            }}
          >
            <div>1</div>
          </div>
          <div
            style={{
              width: "40%",
              height: "400px",
              backgroundColor: "orange",
            }}
          >
            <div>2</div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Contactus;
