import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    fontSize: 14,
  },
  reducers: {
    // Use to change the fontSize accross the app
    changeFontSize: (state) => {
      if (state.fontSize === 14) {
        state.fontSize = 28;
      } else {
        state.fontSize = 14;
      }
    },
  },
});

export const { changeFontSize } = themeSlice.actions;

export const selectFontSize = (state) => state.theme.fontSize;

export default themeSlice.reducer;
