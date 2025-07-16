const app = require("./app");
const { port } = require("./utils/config");

const server = async () => {
  try {
    app.listen(port);
    console.log(`SERVER FUNCIONANDO EN EL PUERTO ${port}`);
  } catch (error) {
    console.log(`ERROR AL LEVANTAR EL SERVER: ${error}`);
  }
};

server();
