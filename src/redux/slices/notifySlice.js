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
    setNotificationReset(state) {
      state.notification = {
        status: null,
        message: null,
        isShown: false,
      };
    },
  },
});

export const notifyActions = notifySlice.actions;

export default notifySlice.reducer;
