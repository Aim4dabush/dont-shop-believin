import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    checkout: {
      isShown: false,
    },
    notification: {
      status: null,
      message: null,
      isShown: false,
    },
    productDetail: {
      title: null,
      isShown: false,
    },
  },
  reducers: {
    setCheckout(state, action) {
      state.checkout = {
        isShown: action.payload,
      };
    },
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
    setProductDetail(state, action) {
      state.productDetail = {
        title: action.payload.title,
        isShown: action.payload.isShown,
      };
    },
    setProductDetailReset(state) {
      state.productDetail = {
        title: null,
        isShown: false,
      };
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
