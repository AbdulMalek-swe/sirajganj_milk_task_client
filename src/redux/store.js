import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./service/blog/useApi";
import authSlice from "./service/user/authSlice";
 

export const store = configureStore({
  reducer: {
     auth:authSlice,
    [blogApi.reducerPath]: blogApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([blogApi.middleware]),
});

// setupListeners(store.dispatch);
 