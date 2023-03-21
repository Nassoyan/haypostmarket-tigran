import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../Redux/slices/authSlice"
import verifyEmailReducer from "../Redux/slices/verifyEmail"
import registerReducer from "../Redux/slices/registerSlice"
import loginReducer from "../Redux/slices/loginSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    register: registerReducer,
    verifyEmail: verifyEmailReducer,
    login: loginReducer
  },
}) 