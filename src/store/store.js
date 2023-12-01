import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import productSlice from "./products/productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productSlice.reducer,
  },
});

export default store;
