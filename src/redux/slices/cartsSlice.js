import { createSlice } from "@reduxjs/toolkit";

const cartsSlice = createSlice({
  name: "carts",
  initialState: {
    quantity: 1,
    product: null,
    shopping: {
      cart: [],
      size: 0,
    },
    wish: {
      cart: [],
      size: 0,
    },
  },
  reducers: {
    setDecrement(state, action) {
      if (state.quantity > 1) {
        state.quantity = state.quantity - action.payload;
      }
    },
    setIncrement(state, action) {
      state.quantity = state.quantity + action.payload;
    },
    setQuantityReset(state) {
      state.quantity = 1;
    },
    setProduct(state, action) {
      state.product = action.payload;
    },
    setShopping(state, action) {
      state.shopping.cart = action.payload;
    },
    setShoppingSize(state, action) {
      state.shopping.size = action.payload;
    },
    setShoppingReset(state) {
      state.shopping = {
        cart: [],
        size: 0,
      };
    },
    setWish(state, action) {
      state.wish.cart = action.payload;
    },
    setWishSize(state, action) {
      state.wish.size = action.payload;
    },
    setWishReset(state) {
      state.wish = {
        cart: [],
        size: 0,
      };
    },
  },
});

export const cartsActions = cartsSlice.actions;

export default cartsSlice.reducer;
