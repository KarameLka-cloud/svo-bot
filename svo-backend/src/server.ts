import "dotenv/config";
import app from "./app.ts";
import bot from "./bot/bot.ts";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  bot.start();
  console.log("Server is running on port", PORT);
});
