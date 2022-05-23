import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exam: '',
};

export const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    updateExam: (state, action) => {
      state.exam = action?.payload;
      return state
    }
  },
});
export const { updateExam } = examSlice.actions;

export default examSlice.reducer;
