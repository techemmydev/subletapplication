import { createSlice } from "@reduxjs/toolkit";
import { iconimage } from "../../My_DataArrays/iconsArray";
const initialState = {
  iconimage,
  selectedCompany: "",
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
export const { setSelectedCompany } = SubletSlice.actions;
export default SubletSlice.reducer;
