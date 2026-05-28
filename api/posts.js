import express from "express";
import { getDB } from "../index.js";
import { ObjectId } from "mongodb";

const api = express.Router();

// POST /posts - crear post
api.post("/addpost", async (req, res) => {
  const db = getDB();

  const { username, email, password } = req.body;
  
});
/////////////////////////////////////////////

// GET / posts - buscar post
api.get("/", async (req, res) => {
  console.log("Funciona");
  res.json({ message: "Funciona" });
});


//////////////////////
// POST /posts - editar post
api.post("/addpost", async (req, res) => {
  const db = getDB();
  
  const { username, email, password } = req.body;
  
});


export default api;
