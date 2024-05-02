import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./service/blog/useApi";
import authSlice from "./service/user/authSlice";
import { apiSlice } from "./features/api/apiSlice";
 
 
export const store = configureStore({
  reducer: {
     auth:authSlice,
     [apiSlice.reducerPath] : apiSlice.reducer,
    // [blogApi.reducerPath]: blogApi.reducer,
  
     
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat( [apiSlice.middleware]),
});

// setupListeners(store.dispatch);
 