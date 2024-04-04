import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "user",
  initialState: {
    currentUser:null,
    loading: null,
    message: null,
    
  },
  reducers: {
    signInStart: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loading = true;
    },
    signInSuccess: (state, actions) => {
      state.user += actions.payload;
      state.loading = false;
      state.message = null
    },
    signInFailure: (state,actions) => {
      state.message = actions.payload
      state.loading = false;
    }
  },
});

export const { signInStart, signInSuccess,signInFailure } = counterSlice.actions;
