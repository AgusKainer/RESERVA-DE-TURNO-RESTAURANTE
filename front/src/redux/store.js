import { configureStore } from "@reduxjs/toolkit";
import clienteSlice from "./reducers/clienteSlice";
import mesaSlice from "./reducers/mesasSlice";
import reservaSlice from "./reducers/reservationSlice";

const store = configureStore({
  reducer: {
    cliente: clienteSlice,
    mesa: mesaSlice,
    reservas: reservaSlice,
  },
});

export default store;
