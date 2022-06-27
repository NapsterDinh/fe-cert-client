import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exam: "",
  currentDoingExam: "",
};

export const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    updateExam: (state, action) => {
      state.exam = action?.payload;
      return state;
    },
    updateCurrentExam: (state, action) => {
      state.currentDoingExam = action?.payload;
      return state;
    },
  },
});
export const { updateExam, updateCurrentExam } = examSlice.actions;

export default examSlice.reducer;
