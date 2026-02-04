import "dotenv/config";
import { Bot } from "@maxhub/max-bot-api";
import { registerCommands } from "./config/commands.ts";
import { botStartedAction } from "./actions/botStarted.action.ts";
import { startAction } from "./actions/start.action.ts";
import { menuAction } from "./actions/menu.action.ts";
import { wantAction, wantRelationAction } from "./actions/want.action.ts";
import { helpAction, helpRelationAction } from "./actions/help.action.ts";
import { employmentAction } from "./actions/employment.action.ts";
import { faqAction } from "./actions/faq.action.ts";
import { fundAction } from "./actions/fund.action.ts";
import { feedbackAction } from "./actions/feedback.action.ts";
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
botStartedAction(bot);
startAction(bot);
menuAction(bot);
wantAction(bot);
wantRelationAction(bot);
helpAction(bot);
helpRelationAction(bot);
employmentAction(bot);
faqAction(bot);
fundAction(bot);
feedbackAction(bot);
returnMainAction(bot);

export default bot;
