import { Bot } from "@maxhub/max-bot-api";

const bot: Bot = new Bot("");

bot.command("start", (ctx) => ctx.reply("Добро пожаловать!"));

bot.start();

export default bot;
