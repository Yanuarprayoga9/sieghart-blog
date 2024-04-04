import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
  loading: null,
  error: null,
  token:null
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
      console.log(actions.payload)
      state.currentUser = actions.payload.user;
      state.loading = false;
      state.error = null;
      state.token = actions.payload.token;
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