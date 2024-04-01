import { configureStore } from "@reduxjs/toolkit";
import SubletSliceCompany from "./slice/SubletSlice";
import pay from "./slice/AlluserValueSlice";
import modalContainer from "./slice/ModalSlice";
export const store = configureStore({
  reducer: {
    companyIcon: SubletSliceCompany,
    payment: pay,
    modal: modalContainer,
  },
});
