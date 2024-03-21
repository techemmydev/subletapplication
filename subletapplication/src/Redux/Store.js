import { configureStore } from "@reduxjs/toolkit";
import SubletSliceCompany from "./slice/SubletSlice";
import pay from "./slice/paymentSlice";
export const store = configureStore({
  reducer: {
    companyIcon: SubletSliceCompany,
    payment: pay,
  },
});
