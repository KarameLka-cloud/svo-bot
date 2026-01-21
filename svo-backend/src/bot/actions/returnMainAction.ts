import { mainKeyboard } from "../keyboards/mainKeyboard.ts";

export async function returnMainAction(bot: any) {
  const mainButtons = await mainKeyboard();

  bot.action("returnMainMenu", async (ctx: any) => {
    await ctx.reply("📜 Выберите интересующий раздел:", {
      format: "html",
      attachments: [mainButtons],
    });
  });
}
