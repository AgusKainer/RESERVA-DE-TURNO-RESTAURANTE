import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReservas } from "../redux/asyncThunk/createAsyncThunk";

export const ReservaList = () => {
  // const reduxState = useSelector((state) => state.reservas);
  // console.log("ESTADO COMPLETO:", reduxState);
  const dispatch = useDispatch();
  const {
    list: reservas,
    loading,
    error,
  } = useSelector((state) => state.reservas);

  useEffect(() => {
    dispatch(fetchReservas());
  }, []);

  return (
    <div>
      ReservaList
      {loading && <p>Cargando.....</p>}
      {error && <p>ERROR: {error}</p>}
      {Array.isArray(reservas) &&
        reservas.map((res) => (
          <div key={res.id}>
            <h3>Cliente: {res.cliente_id}</h3>
            <h3>Mesa: {res.mesa_id ?? "No asignada"}</h3>
            <h3>Fecha: {res.fecha}</h3>
            <h3>Cantidad de Personas: {res.cantidada_personas}</h3>
            <h3>Estado: {res.estado ?? "Pendiente"}</h3>
          </div>
        ))}
    </div>
  );
};
