import React from "react";
import style from "../../My_Component/ContactComponent/contact.module.css";
import Btn from "../ContactBtn/Btn";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";
const contact = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className={style.container}>
      <div>
        <p className={style.getin_touchheading}>Get in touch</p>
        <h5 className={style.getin_touchheadingh5}>You can reach us anytime</h5>
        <div className={style.getin_touch}>
          <div className={style.input_Details}>
            <input type="text" placeholder="firstName" required />
            <input type="text" placeholder="lastName" required />
          </div>

          <div
            className={`${style.input_Detailsemail}  ${
              clicked ? style.clicked : ""
            } `}
            onClick={handleClick}
          >
            <div className={style.icon}>
              <span>
                <HiOutlineMail style={{ fontSize: "30px" }} />
              </span>
            </div>

            <div
              style={{
                width: "70%",
              }}
            >
              <input type="email" placeholder="your mail" required />
            </div>
          </div>
          <div>
            <div
              className={`${style.input_Detailsemail} 
              } `}
            >
              <div className={style.phonenumber_div}>
                <span>+234</span>
              </div>

              <div
                style={{
                  width: "70%",
                }}
              >
                <input
                  type="tel"
                  name=""
                  id=""
                  placeholder="phone number"
                  required
                />
              </div>
            </div>
          </div>
          <div className={style.textareainput}>
            <div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="How can we help you"
              />
            </div>
          </div>
          <div>
            <Btn>submit</Btn>
            {/* <button type="submit">submit</button> */}
          </div>
          <div className={style.privacy}>
            <p>
              By contacting us, you agree to our <span> Terms of Service </span>{" "}
              and <span> Privacy </span>
              policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
