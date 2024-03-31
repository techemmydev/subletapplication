import React from "react";
import style from "../UserSettingComponent/usersetting.module.css";
import Userpicture from "../UserPicture/Userpicture";
import Button from "../../../../My_Component/ButtonComponent/Button";

import { useSelector } from "react-redux";

const Usersetting = () => {
  const { userInformationDetails } = useSelector((state) => state.payment);
  const { FullName, userEmail, userPassword } = userInformationDetails;
  return (
    <>
      <div className={style.setting_page}>
        <div className={style.setting_page_title}>
          <h3>My Account</h3>
        </div>
        <div className={style.setting_page_details}>
          <div className={style.setting_page_box}>
            <div>
              <Userpicture />
            </div>
            <div className={style.setting_page_Information}>
              <div>
                <h6>FULL NAME</h6>
                <h5>{FullName}</h5>
              </div>
              <div>
                <Button
                  style={{
                    width: "132px",
                    height: "39px",
                    padding: "10px",
                    boxShadow: " 0px 3px 3px 0px #E7FBF6",
                    fontFamily: "Roboto",
                    fontSize: "12px",
                    fontWeight: "50px",
                    lineHeight: "19px",
                    bordeRadius: "12px",
                    backgroundColor: "white",
                  }}
                >
                  change
                </Button>
              </div>
            </div>
            <div className={style.setting_page_Information}>
              <div>
                <h6>E-MAIL ADDRESS</h6>
                <h5>{userEmail}</h5>
              </div>
              <div>
                <Button
                  style={{
                    width: "132px",
                    height: "39px",
                    padding: "10px",
                    boxShadow: " 0px 3px 3px 0px #E7FBF6",
                    fontFamily: "Roboto",
                    fontSize: "12px",
                    fontWeight: "50px",
                    lineHeight: "19px",
                    bordeRadius: "12px",
                    backgroundColor: "white",
                  }}
                >
                  change/verify
                </Button>
              </div>
            </div>
            <div className={style.setting_page_Information}>
              <div>
                <h6>PASSWORD</h6>
                <h5>{userPassword}</h5>
              </div>
              <div>
                <Button
                  style={{
                    width: "132px",
                    height: "39px",
                    padding: "10px",
                    boxShadow: " 0px 3px 3px 0px #E7FBF6",
                    fontFamily: "Roboto",
                    fontSize: "12px",
                    fontWeight: "50px",
                    lineHeight: "19px",
                    bordeRadius: "12px",
                    backgroundColor: "white",
                  }}
                >
                  change
                </Button>
              </div>
            </div>
            {/* <div className={style.setting_page_Information}>
              <div>
                <h6>REGION</h6>
                <h5>Nigeria</h5>
              </div>
              <div>
                <Button
                  style={{
                    width: "132px",
                    height: "39px",
                    padding: "10px",
                    boxShadow: " 0px 3px 3px 0px #E7FBF6",
                    fontFamily: "Roboto",
                    fontSize: "12px",
                    fontWeight: "50px",
                    lineHeight: "19px",
                    bordeRadius: "12px",
                    backgroundColor: "white",
                  }}
                >
                  change Region
                </Button>
              </div>
            </div> */}
            <div className={style.setting_page_Information}>
              <div>
                <h5>Deactivate account</h5>
              </div>
              <div>
                <Button
                  style={{
                    width: "132px",
                    height: "39px",
                    padding: "10px",
                    boxShadow: "0px 3px 3px 0px #023125",
                    fontFamily: "Roboto",
                    fontSize: "12px",
                    fontWeight: "50px",
                    lineHeight: "19px",
                    bordeRadius: "12px",
                    backgroundColor: "white",
                    color: "#808080",
                  }}
                >
                  Deactivate
                </Button>
              </div>
            </div>
            <div className={style.setting_page_Information}>
              <div>
                <h5>Delete account</h5>
              </div>
              <div>
                <Button
                  style={{
                    width: "132px",
                    height: "39px",
                    padding: "10px",
                    boxShadow: "0px 3px 3px 0px #023125",

                    fontFamily: "Roboto",
                    fontSize: "12px",
                    fontWeight: "50px",
                    lineHeight: "19px",
                    bordeRadius: "12px",
                    backgroundColor: "#F73B44",
                    color: "white",
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Usersetting;
