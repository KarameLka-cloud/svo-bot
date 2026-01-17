import express from "express";
import bot from "./bot.ts";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  bot.start();
  console.log("Server start");
});
