import { createSlice } from "@reduxjs/toolkit";

// Holds the state for properties related to the application's global UI
export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    // App font sizes options
    fontSizes: [
      { size: 14, text: "16 Pixels", selected: true },
      { size: 28, text: "32 Pixels", selected: false },
    ],
    grow: 1, // Coefficient used to grow properties
  },
  reducers: {
    // Used to change the fontSize accross the app
    changeFontSize: (state, action) => {
      const fontSizes = [...state.fontSizes];
      let grow = 1;

      // If new font size is 32 pixels then change grow
      if (action.payload === 28) {
        grow = 1.5;
      }

      // Set selected font size
      const newFontSizes = fontSizes.map((fontSize) => {
        if (fontSize.size === action.payload) {
          fontSize.selected = true;
          return fontSize;
        }

        fontSize.selected = false;
        return fontSize;
      });

      state.grow = grow;
      state.fontSizes = newFontSizes;
    },
  },
});

export const { changeFontSize } = themeSlice.actions;

export const selectFontSizes = (state) => state.theme.fontSizes;
export const selectGrow = (state) => state.theme.grow;
// Return selected font size
export const selectSelectedFontSize = (state) => {
  const selectedIndex = state.theme.fontSizes.findIndex(
    (fontSize) => fontSize.selected
  );
  return state.theme.fontSizes[selectedIndex].size;
};

export default themeSlice.reducer;
