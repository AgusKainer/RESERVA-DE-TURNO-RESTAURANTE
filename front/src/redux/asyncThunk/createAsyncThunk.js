import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCliente = createAsyncThunk(
  "cliente/fetchCliente",
  async () => {
    const res = await fetch("http://localhost:1000/clientes");
    if (!res.ok) throw new Error(`No hay clientes: ${res}`);
    return await res.json();
  }
);

export const fetchMesas = createAsyncThunk("mesas/fetchMesas", async () => {
  const res = await fetch("http://localhost:1000/mesa");
  const data = await res.json();
  return data.mesa;
});
