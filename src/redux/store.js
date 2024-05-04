 
import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/api/apiSlice';
import { navAuthSlice } from './features/api/authSlice';
 
const rootReducer = combineSlices(apiSlice,navAuthSlice);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(apiSlice.middleware);
    }
  });
};

 