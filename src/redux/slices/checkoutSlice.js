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
        number: null,
        exp: null,
      },
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
        number: action.payload.number,
        exp: action.payload.exp,
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
          number: null,
          exp: null,
        },
        total: null,
      };
    },
    setTotal(state, action) {
      state.order.total = action.payload;
    },
  },
});

export const checkoutActions = checkoutSlice.actions;

export default checkoutSlice.reducer;
