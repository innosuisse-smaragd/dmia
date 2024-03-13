import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import tokenReducer from "./slices/tokenSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    token: tokenReducer,
  },
});
