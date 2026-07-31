import dns from "node:dns";

import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
dotenv.config();

const client = new MongoClient(process.env.MONGO_URL);
let db;

export async function getDB() {
  if (!db) {
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log("DB connected");
  }
  return db;
}
