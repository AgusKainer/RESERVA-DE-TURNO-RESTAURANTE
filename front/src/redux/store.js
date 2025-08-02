import { configureStore } from "@reduxjs/toolkit";
import clienteSlice from "./reducers/clienteSlice";
import mesaSlice from "./reducers/mesasSlice";

const store = configureStore({
  reducer: {
    cliente: clienteSlice,
    mesa: mesaSlice,
  },
});

export default store;
