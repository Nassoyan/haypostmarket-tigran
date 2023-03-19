import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
  error: "",
  status: false,
};

export const asyncFetchData = createAsyncThunk("fetchData", async (value) => {
  const response = await fetch(
    "https://arformeback.ayotech.am/api/check-email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      .addCase(asyncFetchData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(asyncFetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.status = true;
        state.users.push(action.payload);
        state.error = "";
      })
      .addCase(asyncFetchData.rejected, (state, action) => {
        state.loading = false;
        state.status = false;
        state.error = action.error.message;
      });
  },
});

export const checkedEmail = (state) => state.user.status;

export default userSlice.reducer;
