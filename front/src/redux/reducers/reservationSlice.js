import { createSlice } from "@reduxjs/toolkit";
import { fetchReservas } from "../asyncThunk/createAsyncThunk";

export const reservaSlice = createSlice({
  name: "reservaSlice",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReservas.fulfilled, (state, action) => {
        state.list = action.payload.reservas;
        state.loading = false;
      })
      .addCase(fetchReservas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default reservaSlice.reducer;
