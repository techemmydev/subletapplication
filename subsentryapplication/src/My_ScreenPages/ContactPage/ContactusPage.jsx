import React from "react";
import styles from "../ContactPage/contactus.module.css";
import Contact from "../../My_Component/ContactComponent/contact";
const Contactus = () => {
  return (
    <>
      <main className={styles.main_Container}>
        <section className={styles.main_Container2}>
          <div className={styles.main_Container3}>
            <div>
              <h1 className={styles.h1}>Contact Us</h1>
              <p className={styles.p}>
                Email, call, or complete the form so as Sublet can solve
                whatever subscription problem.
              </p>
              <p className={styles.p}>Subsentry@gmail.com</p>
              <p className={styles.p}>+234 703 856 3487 , +234 803 922 3488</p>
            </div>
            <div className={styles.support_Container}>
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
                  Sublet. Your input is crucial in shaping the future of
                  Subsentry.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.main_Container5}>
              <Contact />
            </div>
          </div>
        </section>
      </main>
      {/* <aside className={styles.mapcontainerflex}>
        <div className={styles.mapcontainerflex1}>
          <div className={styles.mapcontainerflex2}>
            <div>
              <img src="/SubletImages/map.logo.png" alt="" width={"80%"} />
            </div>
          </div>
          <div className={styles.mapcontainerflex3}>
            <div>
              <h2 className={styles.location}>Our Location</h2>
              <h1 className={styles.locationh1}>Connecting Near and far</h1>
            </div>
            <div className={styles.address}>
              <h5>Head quaters </h5>
              <address>
                Subsentry inc. Lagos, Nigeria 123 Tech Boulevard, jibowu Lagos
                123 Tech Boulevard. Nigeria
              </address>
            </div>
          </div>
        </div>
      </aside> */}
    </>
  );
};

export default Contactus;
