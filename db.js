import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017');
let db;

export async function connectDB() {
  await client.connect();
  db = client.db('red-social');
  console.log('MongoDB local conectado');
}

export function getDB() {
  return db;
}