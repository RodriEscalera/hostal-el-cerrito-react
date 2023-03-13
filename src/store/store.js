import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sidebar";
const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
  },
});

export default store;
