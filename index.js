import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import usuariosApi from "./api/usuarios.js";
import postsApi from "./api/posts.js";
import seguidoresApi from "./api/seguidores.js";
import mensajesApi from "./api/mensajes.js";

const app = express();
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

connectDB().then(() => {
  app.listen(3000, () => console.log("Servidor en puerto 3000"));
});
