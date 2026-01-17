import express from "express";
import bot from "./bot.ts";
import { prisma } from "./lib/prisma.ts";

const userClient = prisma.user;

const app = express();

app.get("/", (_, res) => {
  res.send("Hello");
});

app.get("/users", async (_, res) => {
  const users = await userClient.findMany();
  res.json(users);
});

app.listen(3000, () => {
  bot.start();
  console.log("Server start");
});
