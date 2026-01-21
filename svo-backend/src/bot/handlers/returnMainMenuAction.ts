import { returnMainMenuKeyboard } from "../keyboards/returnMainMenuKeyboard.ts";

function returnMainMenuAction(bot: any) {
  bot.action("returnMainMenu", async (ctx: any) => {
    await ctx.reply("📜 Выберите интересующий раздел:", {
      format: "html",
      attachments: [returnMainMenuKeyboard],
    });
  });
}

export default returnMainMenuAction;
