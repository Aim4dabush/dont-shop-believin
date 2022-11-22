import { configureStore } from "@reduxjs/toolkit";

//slice
import authReducer from "./slices/authSlice";
import cartsReducer from "./slices/cartsSlice";
import notifyReducer from "./slices/notifySlice";
import productsReducer from "./slices/productsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    carts: cartsReducer,
    notify: notifyReducer,
    products: productsReducer,
  },
});

export default store;
