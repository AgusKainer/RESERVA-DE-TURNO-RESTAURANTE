import { useDispatch, useSelector } from "react-redux";
import { fetchMesas } from "../redux/asyncThunk/createAsyncThunk";
import { useEffect } from "react";

const MesaList = () => {
  const { list: mesa, loading, error } = useSelector((state) => state.mesa);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMesas());
  }, []);
  return (
    <div>
      MesaList
      {loading && <p>Cargando</p>}
      {error && <p>ERROR: {error}</p>}
      {Array.isArray(mesa) &&
        mesa.map((m) => (
          <div>
            <h3>{m.capacidad}</h3>
          </div>
        ))}
    </div>
  );
};

export default MesaList;
