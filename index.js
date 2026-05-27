import express from 'express';
import cors from 'cors';
import { connectDB } from './db.js';
// import bcrypt from 'bcrypt';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Servidor funcionando' });
});

connectDB().then(() => {
  app.listen(3000, () => console.log('Servidor en puerto 3000'));
});