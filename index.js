import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usuariosApi from "./api/usuarios.js";
import { MongoClient } from "mongodb";
import postsApi from "./api/posts.js";
import seguidoresApi from "./api/seguidores.js";
import mensajesApi from "./api/mensajes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

async function connectDB() {
  const uri = process.env.MONGODB_URI;
  const client = await MongoClient.connect(uri);
  app.locals.db = client.db("red-social");
  console.log("MongoDB Atlas conectado");
}

await connectDB();
// get("/", async (req, res) => {
//   res.send({ message: "API Conectada" });
// });

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


///MONGODB_URI = mongodb+srv://carlosraf_db_user:Carlos2026@cluster0.2pdgtpm.mongodb.net/?appName=Cluster0