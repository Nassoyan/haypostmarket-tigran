import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const name = "AUTHENTICATION"


const initialState = {
  regUser:[],
  status:false
}


export const verifyEmailThunk = createAsyncThunk(`${name}/email/verify`, async (value) => {
    const response = await fetch(
      `https://arformeback.ayotech.am/api/email/verify/${value}`, {method: "GET"}
    );
    return await response.json();
  });

  const verifyEmailSlice = createSlice({
    name: "verifyEmail",
    initialState,
    reducer: {},
    extraReducers: (builder) => {
      builder
        .addCase(verifyEmailThunk.pending, (state, action) => {
          state.status = false;
        })
        .addCase(verifyEmailThunk.fulfilled, (state, action) => {
          state.status = true;
        })
        .addCase(verifyEmailThunk.rejected, (state, action) => {
          state.status = false;
        });
    },
  });

  export const selectVerifiedStatus = ((state) => state.verifyEmail.status)

  export default verifyEmailSlice.reducer