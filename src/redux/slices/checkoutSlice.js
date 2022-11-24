import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    order: {
      address: {
        street: null,
        city: null,
        state: null,
        zip: null,
      },
      card: {
        name: null,
        number: null,
        exp: null,
      },
      email: null,
      name: null,
      receipt: null,
      total: null,
    },
  },
  reducers: {
    setAddress(state, action) {
      state.address = {
        street: action.payload.street,
        city: action.payload.city,
        state: action.payload.city,
        zip: action.payload.zip,
      };
    },
    setCard(state, action) {
      state.card = {
        name: action.payload.name,
        number: action.payload.number,
        exp: action.payload.exp,
      };
    },
    setInfo(state, action) {
      state.order = {
        email: action.payload.email,
        name: action.payload.name,
      };
    },
    setOrderReset(state) {
      state.order = {
        address: {
          street: null,
          city: null,
          state: null,
          zip: null,
        },
        card: {
          name: null,
          number: null,
          exp: null,
        },
        email: null,
        name: null,
        receipt: null,
        total: null,
      };
    },
    setReceipt(state, action) {
      state.order.receipt = action.payload;
    },
    setTotal(state, action) {
      state.order.total = action.payload;
    },
  },
});

export const checkoutActions = checkoutSlice.actions;

export default checkoutSlice.reducer;
