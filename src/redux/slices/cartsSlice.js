import { createSlice } from "@reduxjs/toolkit";

const cartsSlice = createSlice({
  name: "carts",
  initialState: {
    loadData: false,
    quantity: 1,
    product: null,
    shoppingCart: [],
    shoppingData: [],
    wishCart: [],
    wishData: [],
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
    setDeleteWishData(state, action) {
      state.wishData.splice(action.payload, 1);
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
    setReplaceWishData(state, action) {
      state.wishData.splice(action.payload.index, 1, action.payload.data);
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
    setWishCart(state, action) {
      state.wishCart = action.payload;
    },
    setWishData(state, action) {
      state.wishData.push(action.payload);
    },
    setWishDataReset(state) {
      state.wishData = [];
    },
  },
});

export const cartsActions = cartsSlice.actions;

export default cartsSlice.reducer;
