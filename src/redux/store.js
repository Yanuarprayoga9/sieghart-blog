import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "./user/user-slice"
const reducer = combineReducers({
    user:counterSlice.reducer,

})

export const store = configureStore({
    reducer
})
  