import React from "react";
import style from "../UserSettingComponent/usersetting.module.css";
import Userpicture from "../UserPicture/Userpicture";
import Button from "../../../../My_Component/ButtonComponent/Button";

const Usersetting = () => {
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
                <h5>Isikalu Oluwatooni Emmanuel</h5>
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
                <h6>FULL NAME</h6>
                <h5>Isikalu Oluwatooni Emmanuel</h5>
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
                <h6>FULL NAME</h6>
                <h5>Isikalu Oluwatooni Emmanuel</h5>
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
                <h6>FULL NAME</h6>
                <h5>Isikalu Oluwatooni Emmanuel</h5>
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
            </div>
            <div className={style.setting_page_Information}>
              <div>
                <h6>FULL NAME</h6>
                <h5>Isikalu Oluwatooni Emmanuel</h5>
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
                <h6>FULL NAME</h6>
                <h5>Isikalu Oluwatooni Emmanuel</h5>
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
