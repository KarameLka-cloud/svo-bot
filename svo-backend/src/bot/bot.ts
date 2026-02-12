import "dotenv/config";
import { Bot } from "@maxhub/max-bot-api";
import { registerCommands } from "./config/commands.ts";
import { startedAction } from "./actions/started.action.ts";
import { startAction } from "./actions/start.action.ts";
import { menuAction } from "./actions/menu.action.ts";
// import { feedbackAction, feedback } from "./actions/feedback.action.ts";
import { returnMainAction } from "./actions/returnMain.action.ts";

// const token = process.env.BOT_TOKEN;
// // if (!token) {
// //   throw new Error("Environment variable BOT_TOKEN is not set");
// // }

// const bot: Bot = new Bot(token);

// registerCommands(bot);

// startedAction(bot);
// startAction(bot);
// menuAction(bot);
// // feedbackAction(bot);
// // feedback(bot);
// returnMainAction(bot);

const token = process.env.BOT_TOKEN;

let bot: Bot;

try {
  if (!token) {
    throw new Error("Environment variable BOT_TOKEN is not set");
  }

  bot = new Bot(token);
  registerCommands(bot);
  startedAction(bot);
  startAction(bot);
  menuAction(bot);
  // feedbackAction(bot);
  // feedback(bot);
  returnMainAction(bot);

  console.log("Bot initialized successfully");
} catch (e) {
  console.error("Failed to initialize bot:", e);
  bot = {} as Bot;
}

export default bot;
