import { configureStore } from "@reduxjs/toolkit";
import SubletSliceCompany from "./slice/SubletSlice";
import pay from "./slice/AlluserValueSlice";
export const store = configureStore({
  reducer: {
    companyIcon: SubletSliceCompany,
    payment: pay,
  },
});
