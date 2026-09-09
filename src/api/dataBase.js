import express from "express";

const app = express();

const list_chat = ["Olá", "Tudo bem?", "Como você está?"];

app.use(express.json());

app.get("/TalkedChat/get", (req, res) => {
  res.json(list_chat);
});

app.post("/TalkedChat/create", (req, res) => {
  const { text } = req.body;

  if (typeof text !== "string" || !text.trim()) {
    return res.status(400).json({ error: "Texto inválido" });
  }

  const message = text.trim();
  list_chat.push(message);

  res.status(201).json(message);
});

export default app;
