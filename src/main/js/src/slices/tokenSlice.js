import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    authToken: "",
  },
  reducers: {
    changeAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
  },
});

export const selectAuthToken = (state) => state.token.authToken;

export const { changeAuthToken } = tokenSlice.actions;
export default tokenSlice.reducer;
