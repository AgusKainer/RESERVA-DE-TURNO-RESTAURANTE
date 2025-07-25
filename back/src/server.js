const app = require("./app");
const { port } = require("./utils/config");
const db = require("./db/conectionDB");

const server = async () => {
  try {
    await db.sync();
    console.log("CONEXION A LA DB CON EXITO");
    app.listen(port);
    console.log(`SERVER FUNCIONANDO EN EL PUERTO ${port}`);
  } catch (error) {
    console.log(`ERROR AL LEVANTAR EL SERVER: ${error}`);
  }
};

server();
