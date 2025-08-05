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

export const fetchReservas = createAsyncThunk(
  "reservas/fetchReservas",
  async () => {
    const res = await fetch("http://localhost:1000/reservas");
    if (!res.ok) throw new Error(`No hay reservas: ${res}`);
    const data = await res.json();
    // console.log("QUE LLEGA AL REDUX: ", data);
    return data;
  }
);
