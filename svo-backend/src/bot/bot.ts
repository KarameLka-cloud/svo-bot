import "dotenv/config";
import { Bot } from "@maxhub/max-bot-api";
import { registerCommands } from "./config/commands.ts";
import sendWelcome from "./handlers/welcomeAction.ts";

// Инициализация бота и проверка токена
const token = process.env.BOT_TOKEN;
if (!token) {
  throw new Error("Environment variable BOT_TOKEN is not set");
}

const bot: Bot = new Bot(token);

registerCommands(bot);

// Обработчики событий
bot.on("bot_started", sendWelcome);
bot.command("start", sendWelcome);

bot.action(/buttonId:([^:]+):(.+)/, async (ctx: any) => {
  const buttonId = ctx.match[1];
  const buttonTitle = ctx.match[2];
  console.log(`Click button with ID: ${buttonId} and Title: ${buttonTitle}`);

  await ctx.answerOnCallback({
    message: {
      text: `Вы нажали кнопку: <b>${buttonTitle}</b>\nID кнопки: ${buttonId}`,
      format: "html",
      attachments: [],
    },
  });
});

// bot.action("returnMainMenu", async (ctx: any) => {
//   await ctx.reply("📜 Выберите интересующий раздел:", {
//     format: "html",
//     attachments: [mainButtons],
//   });
// });

export default bot;
