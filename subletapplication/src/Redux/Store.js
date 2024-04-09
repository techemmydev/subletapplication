import { configureStore } from "@reduxjs/toolkit";
import SubletSliceCompany from "./slice/SubletSlice";
import pay from "./slice/AlluserValueSlice";
import modalContainer from "./slice/ModalSlice";
import userSummaryReducer from "./slice/UserSummariesSlice";

export const store = configureStore({
  reducer: {
    companyIcon: SubletSliceCompany,
    payment: pay,
    modal: modalContainer,
    userSummary: userSummaryReducer,
  },
});
