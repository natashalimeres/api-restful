import mongoose from "mongoose";
import config from "config";
import Logger from "../config/logger";

async function connect() {
  const dbUrl = config.get<string>("dbUrl");

  try {
    await mongoose.connect(dbUrl);
    Logger.info("You're connected to the database");
  } catch (e) {
    Logger.error("You're not connected to the database");
    Logger.error(`{Error: ${e}`);
    process.exit(1);
  }
}

export default connect;
