import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "./api_url";
import Cookies from "js-cookie";


const name = "AUTHENTICATION"



const initialState = {
  logUsers:[],
  status:false,
  email:"",
  password:"",
}

export const  asyncLoginThunk = createAsyncThunk(`${name}/loginThunk`, async (value) => {
    const response = await fetch(
      `${API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin" : "*",
          "Accept": "application/json",

        },
        body: JSON.stringify(value),
      }
    );
    return await response.json();
  });

  const loginSlice = createSlice({
    name:"logUser",
    initialState,
    reducers:{},
      extraReducers:(builder)=> {
        builder
        .addCase(asyncLoginThunk.fulfilled, (state, action) => {
          state.status = true
          state.logUsers.push(action.payload)
        })
      }
  })

  export default loginSlice.reducer




