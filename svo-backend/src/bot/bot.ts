import "dotenv/config";
import { Bot } from "@maxhub/max-bot-api";
import { registerCommands } from "./config/commands.ts";
import { startedAction } from "./actions/started.action.ts";
import { startAction } from "./actions/start.action.ts";
import { menuAction } from "./actions/menu.action.ts";
// import { submenuAction } from "./actions/submenu.action.ts";
import { returnMainAction } from "./actions/returnMain.action.ts";

// Инициализация токена и проверка на наличие в .env
const token = process.env.BOT_TOKEN;
if (!token) {
  throw new Error("Environment variable BOT_TOKEN is not set");
}

const bot: Bot = new Bot(token);

// Инициализация команд
registerCommands(bot);

// Инициализация actions
startedAction(bot);
startAction(bot);
menuAction(bot);
// submenuAction(bot);
returnMainAction(bot);

export default bot;
