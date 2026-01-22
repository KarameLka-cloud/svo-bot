import { Keyboard } from "@maxhub/max-bot-api";
import { getFundById } from "../../prisma/modules/fund/fund.service.ts";
import { backButton } from "../buttons/backButton.ts";
import { returnButton } from "../buttons/returnButton.ts";

export async function fundAction(bot: any) {
  bot.action(/fundButtonId:(.+)/, async (ctx: any) => {
    const id = Number(ctx.match[1]);
    const fundItem = await getFundById(id);
    const bButton = backButton(Keyboard, "mainButtonId:5");
    const rButton = returnButton(Keyboard);

    const keyboard = Keyboard.inlineKeyboard([bButton, rButton]);

    await ctx.answerOnCallback({
      message: {
        text: `${fundItem?.message}`,
        format: "html",
        attachments: [keyboard],
      },
    });
  });
}
