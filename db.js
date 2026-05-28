import "dotenv/config";
import { MongoClient } from "mongodb";

// const client = new MongoClient(
//   "mongodb://admin:admin123@localhost:27017/?authSource=admin",
// );
const client = new MongoClient(process.env.MONGODB_URI);
let db;

export async function connectDB() {
  await client.connect();
  db = client.db("red-social");
  // console.log("MongoDB local conectado");
  console.log("MongoDB Atlas conectado");
}

export function getDB() {
  return db;
}