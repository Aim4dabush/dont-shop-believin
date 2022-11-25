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
      creditCard: {
        company: null,
        name: null,
        card: null,
        exp: null,
      },
      email: null,
      fullName: null,
      items: null,
      receipt: null,
      total: null,
      user: null,
    },
  },
  reducers: {
    setOrder(state, action) {
      state.order = {
        address: {
          street: action.payload.address.street,
          city: action.payload.address.city,
          state: action.payload.address.state,
          zip: action.payload.address.zip,
        },
        creditCard: {
          company: action.payload.creditCard.company,
          name: action.payload.creditCard.name,
          card: action.payload.creditCard.card,
          exp: action.payload.creditCard.exp,
        },
        email: action.payload.email,
        fullName: action.payload.fullName,
        items: action.payload.items,
        receipt: action.payload.receipt,
        total: action.payload.total,
        user: action.payload.user,
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
        creditCard: {
          company: null,
          name: null,
          card: null,
          exp: null,
        },
        email: null,
        fullName: null,
        items: null,
        receipt: null,
        total: null,
        user: null,
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
