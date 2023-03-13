import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSideBar = createAction("SET_SIDEBAR");

const initialState = false;

const reducer = createReducer(initialState, {
  [setSideBar]: (state, action) => action.payload,
});

export default reducer;
