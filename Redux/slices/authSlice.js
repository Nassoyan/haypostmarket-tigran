import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  msg: "",
  user: "",
  token:"token",
  oading: false,
  error:"",
}

export const sighUpUser = createAsyncThunk("signupuser", async () => {
 const res = await fetch("https://arformeback.ayotech.am/api", {
  method:"post",
  headers:{
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body)
 })
 return await res.json()
})


const authSlice = createSlice({
  name: "user",
  initialState,
  reducer:{
    
  },
  extraReducers:{
  
  }
})

export default authSlice.reducer