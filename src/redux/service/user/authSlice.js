import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: undefined,
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    loggedOut: (state) => {
      state.token = undefined;
      state.user = undefined;
    },
  },
});

export const { loggedIn,  loggedOut} = authSlice.actions;
export default authSlice.reducer;