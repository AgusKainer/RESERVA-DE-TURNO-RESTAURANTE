const app = require("./app");
const { port } = require("./utils/config");
const db = require("./db/conectionDB");

const server = async () => {
  try {
    app.listen(port);
    console.log(`SERVER FUNCIONANDO EN EL PUERTO ${port}`);
    await db.sync();
    console.log("CONEXION A LA DB CON EXITO");
  } catch (error) {
    console.log(`ERROR AL LEVANTAR EL SERVER: ${error}`);
  }
};

server();
