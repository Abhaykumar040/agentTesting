const dns = require("node:dns");
const { MongoClient } = require("mongodb");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

let client = null;
let db = null;

async function connectDB() {
  // Already connected
  if (db) {
    return db;
  }

  client = new MongoClient(process.env.MONGO_URL);

  await client.connect();

  db = client.db();

  console.log("MongoDB Connected");

  return db;
}

module.exports = { connectDB };