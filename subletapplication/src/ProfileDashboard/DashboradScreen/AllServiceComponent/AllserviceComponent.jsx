import React from "react";
import style from "../AllServiceComponent/allservice.module.css";
import Button from "../../../My_Component/ButtonComponent/Button";
import Addimage from "../ServiceComponents/AddimageService/Addimage";
import PaymentDate from "../ServiceComponents/paymentservice/PaymentDate";
import { useState } from "react";
import RecieveAlert from "../ServiceComponents/RecieveAlert/RecieveAlert";
import { Link } from "react-router-dom";

const AllserviceComponent = () => {
  const [TrackIndex, SetTrackIndex] = useState(0);
  function nextButton() {
    SetTrackIndex((prev) => prev + 1);
  }
  function previousButton() {
    SetTrackIndex((prev) => prev - 1);
  }

  return (
    <div className={style.allservice_container}>
      <div className={style.allservice_container_center}>
        <h4 className={style.allservice_container_heading}>New</h4>
        {TrackIndex === 0 && <Addimage />}
        {TrackIndex === 1 && <PaymentDate />}
        {TrackIndex === 2 && <RecieveAlert />}

        <div className={style.button_flex}>
          <div>
            <Button
              style={{
                width: "159px",
                height: "44px",

                padding: "12px 10px 12px 10px",
                color: "white",
                bordeRadius: "18px",
                backgroundColor: "#F06445",
              }}
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
                  }}
                >
                  Back
                </Button>
              </div>
            )}

            <div>
              {TrackIndex === 2 ? (
                <Link to="/users" style={{ textDecoration: "none" }}>
                  <Button
                    style={{
                      color: "white",
                    }}
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
  );
};

export default AllserviceComponent;
