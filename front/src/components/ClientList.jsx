import { useDispatch, useSelector } from "react-redux";
import { fetchCliente } from "../redux/asyncThunk/createAsyncThunk";
import { useEffect } from "react";

const ClientList = () => {
  const {
    list: cliente,
    loading,
    error,
  } = useSelector((state) => state.cliente);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCliente());
  }, []);

  return (
    <div>
      ClientList
      {loading && <p>Cargando</p>}
      {error && <p>ERROR: {error}</p>}
      {/* 
        mi back, devuelve un objeto donde tiene dos propiedades:
        message: "Hay clientes",
        cliente: cliente esto es el array a recorrer y mostrar
        */}
      {Array.isArray(cliente.cliente) &&
        cliente.cliente.map((client) => (
          <div key={client.id}>
            <h3>{client.nombre}</h3>
            <h3>{client.email}</h3>
            <h3>{client.telefono}</h3>
          </div>
        ))}
    </div>
  );
};

export default ClientList;
