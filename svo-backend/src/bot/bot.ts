import "dotenv/config";
import { Bot } from "@maxhub/max-bot-api";
import { registerCommands } from "./config/commands.ts";
import { botStartedAction } from "./actions/botStartedAction.ts";
import { startAction } from "./actions/startAction.ts";
import { returnKeyboard } from "./keyboards/returnKeyboard.ts";
import { returnMainAction } from "./actions/returnMainAction.ts";
import { faqKeyboard } from "./keyboards/faqKeyboard.ts";

const token = process.env.BOT_TOKEN;
if (!token) {
  throw new Error("Environment variable BOT_TOKEN is not set");
}

const bot: Bot = new Bot(token);

registerCommands(bot);

botStartedAction(bot);
startAction(bot);
returnMainAction(bot);

bot.action(/buttonId:([^:]+):(.+)/, async (ctx: any) => {
  const buttonId = Number(ctx.match[1]);
  const buttonTitle = ctx.match[2];
  console.log(`Click button with ID: ${buttonId} and Title: ${buttonTitle}`);

  // if (buttonId === 1) {
  // } else if (buttonId === 2) {
  // } else if (buttonId === 3) {
  //   const getFaqButtons = async () => {
  //     return await faqKeyboard();
  //   };

  //   const faqButtons = getFaqButtons();

  //   await ctx.answerOnCallback({
  //     message: {
  //       text: `Вы нажали кнопку: <b>${buttonTitle}</b>\nID кнопки: ${buttonId}`,
  //       format: "html",
  //       attachments: [faqButtons],
  //     },
  //   });
  // }

  await ctx.answerOnCallback({
    message: {
      text: `Вы нажали кнопку: <b>${buttonTitle}</b>\nID кнопки: ${buttonId}`,
      format: "html",
      attachments: [returnKeyboard],
    },
  });
});

export default bot;
