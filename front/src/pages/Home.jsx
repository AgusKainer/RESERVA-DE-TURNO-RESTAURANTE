import { ClienteForm } from "../components/ClienteForm";
import ClientList from "../components/ClientList";
import MesaForm from "../components/MesaForm";
import MesaList from "../components/MesaList";
import { ReservaList } from "../components/ReservaList";

export default function Home() {
  return (
    <div>
      <section>
        <nav>
          <div>
            <div className="divLogo">
              <span>FOTO DEL LOGO</span>
              <span>Nombre del lugar</span>
            </div>
            <div className="divLista">
              <ul>
                <li>Entradas</li>
                <li>Platos</li>
                <li>Postres</li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <ClienteForm />
      <ClientList />
      <MesaForm />
      <MesaList />
      <ReservaList />
    </div>
  );
}
