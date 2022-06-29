import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import examReducer from "./examReducer";
import loadingReducer from "./loadingReducer";
import thunk from "redux-thunk";

import userReducer from "./userReducer";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: "WA29HXHSvL",
      onError: function (error) {
        // Handle the error.
      },
    }),
  ],
};

const reducers = combineReducers({
  user: userReducer,
  loading: loadingReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    persist: persistedReducer,
    exam: examReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
