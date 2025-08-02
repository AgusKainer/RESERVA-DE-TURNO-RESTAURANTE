const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/indes.routes");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(router);

module.exports = app;
