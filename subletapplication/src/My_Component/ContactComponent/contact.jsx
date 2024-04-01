import React from "react";
import style from "../../My_Component/ContactComponent/contact.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ButtonComponent/Button";
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
            {/* <Btn>submit</Btn> */}
            <Link to="/#">
              <Button
                children="submit"
                style={{
                  width: "100%",
                  display: "inline-block",
                  backgroundColor: "rgb(145, 13, 34)",
                  color: "white",
                  height: "50px",
                  padding: " 14px, 20px, 14px, 20px",
                  borderRadius: "18px",
                  border: "none",
                  textAlign: "center",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "13px",
                  fontWeight: "500",
                  lineHeight: "18px",
                  letterSpacing: "0em",
                  textTransform: "capitalize",
                }}
                hoverStyle={{
                  backgroundColor: " #5b0e0e",
                }}
              />
            </Link>
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
