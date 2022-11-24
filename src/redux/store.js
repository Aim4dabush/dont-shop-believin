import { configureStore } from "@reduxjs/toolkit";

//slice
import authReducer from "./slices/authSlice";
import cartsReducer from "./slices/cartsSlice";
import checkoutReducer from "./slices/checkoutSlice";
import modalReducer from "./slices/modalSlice";
import productsReducer from "./slices/productsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    carts: cartsReducer,
    checkout: checkoutReducer,
    modal: modalReducer,
    products: productsReducer,
  },
});

export default store;
