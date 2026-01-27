import { getHelpById } from "../../prisma/modules/help/help.service.ts";
import { getListKeyboard } from "../services/getListKeyboard.ts";

export async function helpAction(bot: any) {
  bot.action(/helpButtonId:(.+)/, async (ctx: any) => {
    const id = Number(ctx.match[1]);
    const item = await getHelpById(id);

    const keyboard = await getListKeyboard([], {
      backButtonAction: "menuButtonId:2",
      showBackButton: true,
    });

    await ctx.answerOnCallback({
      message: {
        text: `${item?.message ?? item?.name_button}`,
        format: "html",
        attachments: [keyboard],
      },
    });
  });
}
