import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { userRegisterReducer } from "./reducers/userReducers.js";

const reducer = combineReducers({
  userRegister: userRegisterReducer,
});

const initialState = {
  userDetails: {},
};

const store = configureStore({
  reducer: reducer,
  preloadedState: initialState,
  middleware: [thunk],
});

export default store;
