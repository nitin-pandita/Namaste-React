import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const appStore = configureStore(
  //  button -> dispatch(action) -> reducer function -> Modify Slice
  {
    // adding slice to store
    reducer: {
      cart: cartSlice,
    },
  }
);

export default appStore;
