import React from "react";

const Modal = () => {
  return (
    <aside style={{ width: "100%", height: "100vh", backgroundColor: "red" }}>
      <div className="">
        <h4>Remove all items from your shopping cart</h4>
        <div>
          <button type="button">confirm</button>
          <button type="button">cancel</button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
