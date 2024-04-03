import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "./user/user-slice"

export const store = configureStore({
    reducer: counterSlice.reducer
  })
  