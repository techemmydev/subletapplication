import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amountSubscribe: "",
  nextPaymentDate: "",
  billingCycle: {
    value: "",
    unit: true,
  },
  autoRenew: "",
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setNextPaymentDate: (state, action) => {
      state.nextPaymentDate = action.payload;
    },
    setBillingCycle: (state, action) => {
      state.billingCycle = action.payload;
    },
    setAutoRenew: (state, action) => {
      state.autoRenew = action.payload;
    },
    setAmountSubscribe: (state, action) => {
      state.amountSubscribe = action.payload;
    },
  },
});

export const {
  setNextPaymentDate,
  setBillingCycle,
  setAutoRenew,
  setAmountSubscribe,
} = paymentSlice.actions;
export default paymentSlice.reducer;
