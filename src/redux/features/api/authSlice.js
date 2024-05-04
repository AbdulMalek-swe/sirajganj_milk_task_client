import { createSlice } from "@reduxjs/toolkit";

 
const initialState  = {
   token:""
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const navAuthSlice = createSlice({
  name: 'authSlice',
   
  initialState,
  
  reducers: (create) => ({
    logout: create.reducer((state, action ) => {
      state.token = action.payload;
    }),

    
 
  }),
  
  
});

// Action creators are generated for each case reducer function.
export const {
 logout
   
} = navAuthSlice.actions;

 