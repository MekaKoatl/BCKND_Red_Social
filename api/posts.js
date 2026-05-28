import express from "express";
import { getDB } from "../db.js";
import { ObjectId } from "mongodb";

const api = express.Router();

// POST /posts - crear post
api.post("/", async (req, res) => {
  console.log("Funciona");
  res.json({ message: "Funciona"});
});
/////////////////////////////////////////////
api.get("/", async (req, res) => {
  console.log("Funciona");
  res.json({ message: "Funciona"});
});

export default api;
