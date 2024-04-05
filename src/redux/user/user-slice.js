import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
  loading: null,
  error: null,
};
 const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, actions) => {
      state.currentUser = actions.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, actions) => {
      state.error = actions.payload;
      state.loading = false;
    },
    signOut: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    
  },
});

export const { signInStart, signInSuccess, signInFailure,signOut } =
  userSlice.actions;
  export default userSlice.reducer;