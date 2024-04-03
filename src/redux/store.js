import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./service/blog/useApi";
  

export const store = configureStore({
  reducer: {
    // counterReducer,
    [userApi.reducerPath]: userApi.reducer,
    
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([userApi.middleware]),
});

// setupListeners(store.dispatch);
 