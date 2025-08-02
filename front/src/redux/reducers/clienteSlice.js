import { createSlice } from "@reduxjs/toolkit";
import { fetchCliente } from "../asyncThunk/createAsyncThunk";

// const initialState = [
//   { id: 1, nombre: "jose", email: "jose@gmail.com", telefono: 249951 },
// ];

export const clienteSlice = createSlice({
  name: "clienteSlice",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCliente.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCliente.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchCliente.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default clienteSlice.reducer;
