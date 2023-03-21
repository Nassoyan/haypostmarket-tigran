import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const name = "AUTHENTICATION"

const initialState = {
  users: [],
  error: "",
  status: false,
};



export const asyncFetchData = createAsyncThunk(`${name}/check-email`, async (value) => {
  const response = await fetch(
    "https://arformeback.ayotech.am/api/check-email",
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

const userSlice = createSlice({
  name: "users",
  initialState,
    reducer: {},
    extraReducers: (builder) => {
      builder
        .addCase(asyncFetchData.fulfilled, (state, action) => {
          state.status = true;
          state.users.push(action.payload);
        })
        .addCase(asyncFetchData.rejected, (state, action) => {
          state.status = false;
        });
    },
});

export const checkedEmail = (state) => state.user.status;

export default userSlice.reducer;
