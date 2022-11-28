import { createSlice } from "@reduxjs/toolkit";

const cartsSlice = createSlice({
  name: "carts",
  initialState: {
    loadData: false,
    quantity: 1,
    product: null,
    shoppingData: [],
    shoppingCart: [],
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
    setDeleteShoppingData(state, action) {
      state.shoppingData.splice(action.payload, 1);
    },
    setIncrement(state, action) {
      state.quantity = state.quantity + action.payload;
    },
    setLoadData(state, action) {
      state.loadData = action.payload;
    },
    setProduct(state, action) {
      state.product = action.payload;
    },
    setQuantityReset(state) {
      state.quantity = 1;
    },
    setReplaceShoppingData(state, action) {
      state.shoppingData.splice(action.payload.index, 1, action.payload.data);
    },
    setShoppingCart(state, action) {
      state.shoppingCart = action.payload;
    },
    setShoppingData(state, action) {
      state.shoppingData.push(action.payload);
    },
    setShoppingDataReset(state) {
      state.shoppingData = [];
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
