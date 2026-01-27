import { menuKeyboard } from "../keyboards/menuKeyboard.ts";

export async function returnMainAction(bot: any) {
  const menuButtons = await menuKeyboard();

  bot.action("returnMainMenu", async (ctx: any) => {
    await ctx.answerOnCallback({
      message: {
        text: `🗃️ Выберите интересующий раздел:`,
        format: "html",
        attachments: [menuButtons],
      },
    });
  });
}
