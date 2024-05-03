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
                Email, call, or complete the form so as Subsentry can solve
                whatever subscription problem.
              </p>
              <p className={styles.p}>Subsentry@gmail.com</p>
              <p className={styles.p}>+234 8065592378 , +234 803 922 3488</p>
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
                  Subsentry. Your input is crucial in shaping the future of
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
      <aside className={styles.mapcontainerflex}>
        <div className={styles.mapcontainerflex1}>
          <div className={styles.mapcontainerflex2}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.00094306994!2d3.364662475713153!3d6.5215615231843795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c4da6e7985b%3A0xcc91fa8b98376c74!2sThe%20Bulb!5e0!3m2!1sen!2sng!4v1714732737710!5m2!1sen!2sng"
              width="100%"
              height="400"
              title="Responsive Google Map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={styles.mapcontainerflex3}>
            <div>
              <h2 className={styles.location}>Our Location</h2>
              <h1 className={styles.locationh1}>Connecting Near and far</h1>
            </div>
            <div className={styles.address}>
              <h5>Head quaters </h5>
              <address>
                The Bulb 39 Ikorodu-Ososun Rd, Jibowu, Lagos 101245, Lagos
              </address>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Contactus;
