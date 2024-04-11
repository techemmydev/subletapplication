import React from "react";
import style from "../AllServiceComponent/allservice.module.css";
import Button from "../../../My_Component/ButtonComponent/Button";
import Addimage from "../ServiceComponents/AddimageService/Addimage";
import PaymentDate from "../ServiceComponents/paymentservice/PaymentDate";
import { useState } from "react";
import RecieveAlert from "../ServiceComponents/RecieveAlert/RecieveAlert";
import { Link } from "react-router-dom";
import { OpenModal } from "../../../Redux/slice/ModalSlice";

import Modal from "../userComponentfolder/ModalComponents/Modal";
import SubletLogo from "../../../My_Component/SubletLogo/SubletLogo";
import { Setnotify } from "../../../Redux/slice/AlluserValueSlice";
import { useSelector, useDispatch } from "react-redux";

const AllserviceComponent = () => {
  const { isOpen } = useSelector((state) => state.modal);

  const dispatch = useDispatch();
  const [TrackIndex, SetTrackIndex] = useState(0);
  function nextButton() {
    SetTrackIndex((prev) => prev + 1);
  }
  function previousButton() {
    SetTrackIndex((prev) => prev - 1);
  }
  function open() {
    dispatch(OpenModal());
  }
  function notification() {
    dispatch(Setnotify());
  }
  return (
    <>
      <div className={style.allservice_container}>
        <div className={style.allservice_container_center}>
          <div className={style.allservice_container_iconflex}>
            <h4 className={style.allservice_container_heading}>New</h4>
            <SubletLogo />
          </div>

          {TrackIndex === 0 && <Addimage />}
          {TrackIndex === 1 && <PaymentDate />}
          {TrackIndex === 2 && <RecieveAlert />}

          <div className={style.button_flex}>
            <div>
              {isOpen && <Modal />}
              <Button
                next={open}
                style={{
                  width: "159px",
                  height: "44px",

                  padding: "12px 10px 12px 10px",
                  color: "white",
                  bordeRadius: "18px",
                  backgroundColor: " rgb(145, 13, 34)",
                }}
                hoverStyle={{ backgroundColor: " #5b0e0e" }}
              >
                Cancel
              </Button>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              {TrackIndex !== 0 && (
                <div>
                  <Button
                    next={previousButton}
                    style={{
                      color: "white",
                      backgroundColor: " rgb(145, 13, 34)",
                    }}
                    hoverStyle={{ backgroundColor: " #5b0e0e" }}
                  >
                    Back
                  </Button>
                </div>
              )}

              <div>
                {TrackIndex === 2 ? (
                  <Link to="/dashboard" style={{ textDecoration: "none" }}>
                    <Button
                      style={{
                        color: "white",
                        backgroundColor: " #28162d",
                      }}
                      next={notification}
                    >
                      {" "}
                      Finish{" "}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    next={nextButton}
                    style={{
                      color: "white",
                      backgroundColor: " #28162d",
                    }}
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllserviceComponent;
