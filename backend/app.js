const express = require("express");
const { chats } = require("./data/data");
const dotenv = require('dotenv')
const app = express();

const port = process.env.port|| 1323;

dotenv.config()
app.get("/", (req, res) => {
  res.send("working.........");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});
app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});
app.listen(port, () => {
  console.log(`Running on the port :${port}`);
});
