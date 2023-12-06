//ENV VARIABLES
require("dotenv").config();

import express from "express";
import config from "config";

const app = express();

// JSON middleware
app.use(express.json());

//DB
import db from "../config/db";

//Routes
import router from "./router";

//Logger
import Logger from "../config/logger";

//Middlewares
import morganMiddleware from "./middleware/morganMiddleware";

app.use("/api/", router);
app.use(morganMiddleware);

//app port
const port = config.get<number>("port");

app.listen(port, async () => {
  await db();
  Logger.info(`Aplicação funcionando na porta: ${port}`);
});
