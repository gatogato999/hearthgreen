// this is where we store all data (the single source of truth)
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";

// create my store
export const store = configureStore({
  //  the configureStore require a reducer
  // the reducers are function that specify how the state of the applicatoin
  //  should change is response to an action
  reducer: {
    // it take two args
    // state : the current state of the part of the application
    // action : describe what happens in the application
    cart: cartReducer,
  },
});
