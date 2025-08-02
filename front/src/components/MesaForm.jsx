import useFormHook from "../services/reserva";

const MesaForm = () => {
  const formInitial = {
    capacidad: 0,
  };
  const { form, onChange } = useFormHook(formInitial);
  const { capacidad } = form;
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };
  return (
    <div>
      MesaForm
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="capacidad">Capcidad</label>
          <input
            type="number"
            name="capacidad"
            id="capacidad"
            placeholder="Ingrese la capacidad de la mesa"
            value={capacidad}
            onChange={onChange}
          />
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default MesaForm;
