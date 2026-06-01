import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usuariosApi from "./api/usuarios.js";
import { MongoClient } from "mongodb";
import postsApi from "./api/posts.js";
import seguidoresApi from "./api/seguidores.js";
import mensajesApi from "./api/mensajes.js";

import dns from "dns";

dotenv.config();

const app = express();
// DNS de Google
dns.setServers(["8.8.8.8", "8.8.4.4"]);

await connectDB();

async function connectDB() {
  console.log(process.env.db);
  const uri = process.env.MONGODB_URI;
  const client = await MongoClient.connect(uri);
  app.locals.db = client.db("red-social");
  console.log("MongoDB Atlas conectado");
}



app.use(cors());
app.use(express.json());

// Rutas // apis
app.use("/usuarios", usuariosApi);
app.use("/posts", postsApi);
app.use("/seguidores", seguidoresApi);
app.use("/mensajes", mensajesApi);

app.get("/", (req, res) => {
  res.json({ message: "Servidor funcionando" });
});

app.listen(process.env.PORT || 3000);

export default app;
