import { createSlice } from "@reduxjs/toolkit";

const notifySlice = createSlice({
  name: "notify",
  initialState: {
    notification: {
      status: null,
      message: null,
      isShown: false,
    },
  },
  reducers: {
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
        isShown: action.payload.isShown,
      };
    },
  },
});

export const notifyActions = notifySlice.actions;

export default notifySlice.reducer;
