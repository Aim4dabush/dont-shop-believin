import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsArr: [],
    category: "",
  },
  reducers: {
    setProductsArr(state, action) {
      state.productsArr.push(action.payload);
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
