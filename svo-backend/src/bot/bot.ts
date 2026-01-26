import "dotenv/config";
import { Bot } from "@maxhub/max-bot-api";
import { registerCommands } from "./config/commands.ts";
import { botStartedAction } from "./actions/botStartedAction.ts";
import { startAction } from "./actions/startAction.ts";
import { mainAction } from "./actions/mainAction.ts";
import { faqAction } from "./actions/faqAction.ts";
import { fundAction } from "./actions/fundAction.ts";
import { returnMainAction } from "./actions/returnMainAction.ts";

// Инициализация токена и проверка на наличие в .env
const token = process.env.BOT_TOKEN;
if (!token) {
  throw new Error("Environment variable BOT_TOKEN is not set");
}

const bot: Bot = new Bot(token);

// Инициализация команд
registerCommands(bot);

// Инициализация actions
botStartedAction(bot);
startAction(bot);
mainAction(bot);
faqAction(bot);
fundAction(bot);
returnMainAction(bot);

export default bot;
