import { createSlice } from "@reduxjs/toolkit";

export const rotateSlice = createSlice({
  name: "rotate",
  initialState: {
    rotate:false
  },
  reducers:{
    startRotate: (state) => {
      state.rotate=true
    },
    stopRotate: (state) => {
      state.rotate=false
    },
  }
});

export const {startRotate, stopRotate} = rotateSlice.actions;

export default rotateSlice.reducer;