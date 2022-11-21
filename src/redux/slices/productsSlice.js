import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsArr: [],
    category: "",
    isLoading: false,
  },
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setProductsArr(state, action) {
      state.productsArr = action.payload;
    },
    setProductsReset(state) {
      state.productsArr = [];
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
