import useFormHook from "../services/reserva";

export const ClienteForm = () => {
  const formInitial = {
    nombre: "",
    email: "",
    telefono: "",
  };
  const { form, onChange } = useFormHook(formInitial);
  const { nombre, email, telefono } = form;
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };
  return (
    <div>
      ClienteForm
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Ingrese su nombre"
            value={nombre}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ingrese su email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="telefono">Telefono</label>
          <input
            type="number"
            name="telefono"
            id="telefono"
            placeholder="Ingrese su numero"
            value={telefono}
            onChange={onChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
