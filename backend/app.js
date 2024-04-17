const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const data = require("./config/db");
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require("./middleware/errorMiddleWare");
dotenv.config();
data();
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("working.........");
});

app.use("/api/user", userRoutes);
app.use(notFound)
app.use(errorHandler)

// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });
// app.get("/api/chat/:id", (req, res) => {
//   const singleChat = chats.find((c) => c._id === req.params.id);
//   res.send(singleChat);
// });
app.listen(PORT, () => {
  console.log(`Running on the PORT :${PORT}`);
});
