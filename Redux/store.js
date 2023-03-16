import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./slices/authSlice"
import authSlice from "../Redux/slices/authSlice"

export const store = configureStore({
  reducer: {
    user: authSlice
  },
})