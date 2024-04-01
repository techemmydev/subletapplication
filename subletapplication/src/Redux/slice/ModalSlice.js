import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
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
  },
});
export const { OpenModal, CloseModal } = ModalSlice.actions;
export default ModalSlice.reducer;
