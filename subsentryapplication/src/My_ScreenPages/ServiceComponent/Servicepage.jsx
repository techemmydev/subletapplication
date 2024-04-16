import React from "react";
import style from "../ServiceComponent/service.module.css";
import { mypremuim } from "../../My_DataArrays/premuim";
const Servicepage = () => {
  return (
    <div className={style.service_container}>
      <div className={style.service_heading}>
        <div style={{ width: "70%" }}>
          <h1>Get More From Your Finances With Subsentry Premium</h1>
          <p>
            Premium is more than just software features! You’ll also get real
            access to humans who can help you cancel subscriptions, lower your
            bills, or help with questions about your personal finances.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
          //   marginTop: "5%",
        }}
      >
        {mypremuim.map((items, index) => {
          return (
            <div
              key={index}
              className={`${style.conrainer} ${
                index === 1 ? style.alignItems : ""
              } `}
            >
              <div className={style.inner_heading}>
                <h1>{items.heading}</h1>
                <h5>{items.premiumstatus}</h5>
              </div>
              <div>
                <h6>{items.title1}</h6>
                <p>{items.title1paragraph}</p>
              </div>
              <div>
                <h6>{items.title2}</h6>
                <p>{items.title2paragraph}</p>
              </div>
              <div>
                <h6>{items.title3}</h6>
                <p>{items.title3paragraph}</p>
              </div>
              <div style={{ marginTop: "10px" }}>
                <h6>{items.title4}</h6>
                <p>{items.title4paragraph}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Servicepage;
