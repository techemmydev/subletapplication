import React from "react";
import herosectionstyle from "./herosection.module.css";

const Herosection = () => {
  return (
    <section className={herosectionstyle.hero_section}>
      <main className={herosectionstyle.epliseimgcontainer}>
        {/* <img
          src="/src/assets/Ellipse 1.png"
          alt="messages"
          className={herosectionstyle.epliseimg}
        /> */}
        <aside className={herosectionstyle.container}>
          <div className={herosectionstyle.calendercontainer}>
            <div className={herosectionstyle.innercalender}>
              <div className={herosectionstyle.backgroundimage}>
                <img src="/src/assets/calendar.png" alt="messages" />
              </div>

              <div>
                <h4>Calendar</h4>
                <p>
                  see What Payment are due on what day. With the 12-month view
                  and annual expeneses Stand out
                </p>
              </div>
            </div>
          </div>

          <div className={herosectionstyle.reportcontainer}>
            <div className={herosectionstyle.innerreport}>
              <div className={herosectionstyle.backgroundimage}>
                <img src="/src/assets/vector.png" alt="messages" />
              </div>

              <div>
                <h4>Report</h4>
                <p>
                  A clear picture of what you’re spending (and possibly
                  wasting). how much displayed with simple clarity
                </p>
              </div>
            </div>
          </div>

          <div className={herosectionstyle.realtimecontainer}>
            <div className={herosectionstyle.innerrealtime}>
              <div className={herosectionstyle.backgroundimage}>
                <img src="/src/assets/ArrowsClockwise.png" alt="messages" />
              </div>

              <div>
                <h4>Real-time mangement</h4>
                <p>
                  A clear picture of what you’re spending (and possibly
                  wasting). how much displayed with simple clarity
                </p>
              </div>
            </div>
          </div>

          <div className={herosectionstyle.organisationcontainer}>
            <div className={herosectionstyle.innerorgansisation}>
              <div className={herosectionstyle.backgroundimage}>
                <img src="/src/assets/vector2.png" alt="messages" />
              </div>
              <div>
                <h4>Oranganisation</h4>
                <p>
                  Deep organisational features keep every subscription
                  associated with the right entity.
                </p>
              </div>
            </div>
          </div>

          <div className={herosectionstyle.alertcontainer}>
            <div className={herosectionstyle.inneralert}>
              <div className={herosectionstyle.backgroundimage}>
                <img
                  src="/src/assets/fluent-mdl2_reminder-time.png"
                  alt="messages"
                />
              </div>
              <div>
                <h4>Alert</h4>
                <p>
                  Sublet allows you to set alerts before your next payments.
                  Exactly when you want them. Sent wherever you want.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </section>
  );
};

export default Herosection;
{
  /* <div className={herosectionstyle.eplise}></div> */
}
