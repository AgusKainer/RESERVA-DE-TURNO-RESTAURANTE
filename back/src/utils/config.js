require("dotenv").config();

const port = process.env.port;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

module.exports = { port, dbName, dbPass, dbUser };
