import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  loginIn: true,
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    OpenModal: (state, action) => {
      state.isOpen = action.payload = true;
    },
    CloseModal: (state, action) => {
      state.isOpen = action.payload = false;
    },

    Closein: (state, action) => {
      state.loginIn = action.payload = false;
    },
  },
});
export const { OpenModal, CloseModal, Closein } = ModalSlice.actions;
export default ModalSlice.reducer;
