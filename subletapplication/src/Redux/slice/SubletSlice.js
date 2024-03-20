import { createSlice } from "@reduxjs/toolkit";
import { iconimage } from "../../My_DataArrays/iconsArray";
const initialState = {
  iconimage,
  selectedCompany: null,

  amountsubscribed: 2,
  dolloarAmount: 34.666,
};

export const SubletSlice = createSlice({
  name: "companyIcon",
  initialState,
  reducers: {
    setSelectedCompany: (state, action) => {
      state.selectedCompany = action.payload;
    },
  },
});
export const { setSelectedCompany, showSelectedCompany } = SubletSlice.actions;
export default SubletSlice.reducer;
