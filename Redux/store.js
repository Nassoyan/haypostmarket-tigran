import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../Redux/slices/authSlice"

export const store = configureStore({
  reducer: {
    user: userReducer
  },
}) 