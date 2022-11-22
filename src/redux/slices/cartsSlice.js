import { createSlice } from "@reduxjs/toolkit";

const cartsSlice = createSlice({
  name: "carts",
  initialState: {
    quantity: 1,
    product: null,
    shopping: [],
    wish: [],
  },
  reducers: {
    setDecrement(state, action) {
      state.quantity = state.quantity - action.payload;
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
    setReplaceShoppingProduct(state, action) {
      state.shopping.splice(action.payload.index, 1, action.payload.product);
    },
    setReplaceWishItem(state, action) {
      state.wish.splice(action.payload.index, 1, action.payload.product);
    },
    setShopping(state, action) {
      state.shopping.push(action.payload);
    },
    setShoppingReset(state) {
      state.shopping = [];
    },
    setWish(state, action) {
      state.wish.push(action.payload);
    },
    setWishReset(state) {
      state.wish = [];
    },
  },
});

export const cartsActions = cartsSlice.actions;

export default cartsSlice.reducer;
