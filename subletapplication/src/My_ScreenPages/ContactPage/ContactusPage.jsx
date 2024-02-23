import React from "react";
import styles from "../ContactPage/contactus.module.css";
import Contact from "../../My_Component/ContactComponent/contact";
const Contactus = () => {
  return (
    <>
      <main
        style={{
          width: "100%",
          height: "140vh",
          backgroundColor: "#E7FBF6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <section
          style={{
            width: "75%",
            // backgroundColor: "red",
            gap: "50px",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              // backgroundColor: "orangered",
              width: "60%",
              height: "600px",
              padding: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
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
            <div style={{ display: "flex", gap: "20px", overflow: "hidden" }}>
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
            style={{
              backgroundColor: "white",
              width: "60%",
              height: "600px",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <div>
              <div style={{ padding: "2rem" }}>
                <Contact />
              </div>
            </div>
          </div>
        </section>
      </main>
      <aside className={styles.mapcontainerflex}>
        <div
          style={{
            display: "flex",
            // backgroundColor: "red",
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
              // backgroundColor: "orangered",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="/src/assets/Subletimages/map.logo.png"
                alt=""
                width={"80%"}
              />
            </div>
          </div>
          <div
            style={{
              width: "40%",
              height: "400px",
              // backgroundColor: "orange",
              display: "flex",
              justifyContent: "space-evenly",

              flexDirection: "column",
              padding: "2rem",
            }}
          >
            <div>
              <h2 className={styles.location}>Our Location</h2>
              <h1 className={styles.locationh1}>Connecting Near and far</h1>
            </div>
            <div className={styles.address}>
              <h5>Head quaters </h5>
              <address>
                Sublet inc. Lagos, Nigeria 123 Tech Boulevard, jibowu Lagos 123
                Tech Boulevard. Nigeria
              </address>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Contactus;
