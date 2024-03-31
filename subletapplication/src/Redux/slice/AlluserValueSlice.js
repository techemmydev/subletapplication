import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amountSubscribe: "",
  description: "",
  nextPaymentDate: "",
  billingCycle: {
    value: "",
    unit: true,
  },
  autoRenew: "",
  userInformationDetails: {
    FullName: "",
    firstName: "",
    lastName: "",
    userEmail: "",
    userPhoneNumber: "",
    userMesssage: "",
    userPassword: "",
    ConfirmedPassword: "",
  },
};

export const AlluserValueSlice = createSlice({
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
    setuserDetailsInformations: (state, action) => {
      state.userInformationDetails = action.payload;
    },
    setuserDetailsDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const {
  setNextPaymentDate,
  setBillingCycle,
  setAutoRenew,
  setAmountSubscribe,
  setuserDetailsInformations,
  setuserDetailsDescription,
} = AlluserValueSlice.actions;
export default AlluserValueSlice.reducer;
