import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userSummaries: [],
};

const userSummarySlice = createSlice({
  name: "userSummary",
  initialState,
  reducers: {
    addUserSummary: (state, action) => {
      state.userSummaries.push(action.payload);
    },
    // removeUserSummary: (state, action) => {
    //   state.userSummaries = state.userSummaries.filter(
    //     (summary) => summary !== action.payload
    //   );
    // },
  },
});

export const { addUserSummary, removeUserSummary } = userSummarySlice.actions;
export default userSummarySlice.reducer;
