import { configureStore } from "@reduxjs/toolkit";

//slice
import authReducer from "./slices/authSlice";
import notifyReducer from "./slices/notifySlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    notify: notifyReducer,
  },
});

export default store;
