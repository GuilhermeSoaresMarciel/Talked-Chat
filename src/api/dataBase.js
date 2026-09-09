import express from "express";

const app = express();

const list_chat = ["Olá", "Tudo bem?", "Como você está?"];

app.get("/TalkedChat/get", (req, res) => {
  res.json(list_chat);
});

export default app;