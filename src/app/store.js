import { configureStore } from "@reduxjs/toolkit";
import formDataSlice from "../features/formData.slice";

export const store = configureStore({
  reducer: {
    formData: formDataSlice,
  },
});
