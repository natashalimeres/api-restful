import mongoose from "mongoose";
import config from "config";
import Logger from "../config/logger";

async function connect() {
  const dbUrl = config.get<string>("dbUrl");

  try {
    await mongoose.connect(dbUrl);
    Logger.info("Conectou ao banco de dados");
  } catch (e) {
    Logger.error("Não foi possível conectar ao banco de dados");
    Logger.error(`{Erro: ${e}`);
    process.exit(1);
  }
}

export default connect;
