import React from "react";
import style from "../ModalComponents/modal.module.css";
import Button from "../../../../My_Component/ButtonComponent/Button";
import { CloseModal, OpenModal } from "../../../../Redux/slice/ModalSlice";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Modal = () => {
  // const { isOpen } = useSelector((state) => state.modal);
  const closemyModal = () => {
    dispatch(CloseModal());
  };
  function open() {
    dispatch(OpenModal());
  }
  const dispatch = useDispatch();
  return (
    <aside className={style.modal_container}>
      <div className={style.modal_container1}>
        <h4>Are you sure you want to cancel</h4>
        <div className={style.modal_container_button}>
          <Link to={"/dashboard"}>
            {" "}
            <Button next={open}>yes</Button>{" "}
          </Link>

          <Button next={closemyModal}>no</Button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
