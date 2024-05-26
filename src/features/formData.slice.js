import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    addData(state, action) {
      console.log(action.payload);
      state.push(action.payload);
    },
  },
});

export const { addData } = formDataSlice.actions;
export default formDataSlice.reducer;
