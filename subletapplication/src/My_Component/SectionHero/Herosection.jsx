import React from "react";
import herosectionstyle from "../../My_Component/SectionHero/herosection.module.css";

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
                <h4 className={herosectionstyle.h4content}>Calendar</h4>
                <p className={herosectionstyle.pcontent}>
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
                <h4 className={herosectionstyle.h4content}>Report</h4>
                <p className={herosectionstyle.pcontent}>
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
                <h4 className={herosectionstyle.h4content}>
                  Real-time mangement
                </h4>
                <p className={herosectionstyle.pcontent}>
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
                <h4 className={herosectionstyle.h4content}>Oranganisation</h4>
                <p className={herosectionstyle.pcontent}>
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
                <h4 className={herosectionstyle.h4content}>Alert</h4>
                <p className={herosectionstyle.pcontent}>
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
