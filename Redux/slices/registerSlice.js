import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const name = "AUTHENTICATION"

const initialState= {
    regUsers: [],
    name:"",
    surName:"",
    email:"",
    password:"",
    password_confirmation:"",
    status:false
}


export  const asyncRegisterThunk = createAsyncThunk(`${name}registerThunk`, async (value) => {
    const response = await fetch(
      "https://arformeback.ayotech.am/api/auth/register",
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
  })

 const registerSlice = createSlice({
    name:"regUsers",
    initialState,
    reducer:{},
    extraReducers: (builder) => {
        builder
          .addCase(asyncRegisterThunk.pending, (state, action) => {
            state.status = true;
          })
          .addCase(asyncRegisterThunk.fulfilled, (state, action) => {
            state.status = true;
            
          })
          .addCase(asyncRegisterThunk.rejected, (state, action) => {
            state.status = false;
            state.error = action.error.message;
          });
      },
})


export default registerSlice.reducer;