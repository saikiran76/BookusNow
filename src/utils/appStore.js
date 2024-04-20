import { configureStore } from "@reduxjs/toolkit";
import recSlice from "./recSlice";

const appStore =  configureStore({
    reducer: {
      rec : recSlice,
    },
});

export default appStore;

