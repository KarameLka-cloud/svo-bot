import { getWantById } from "../../prisma/modules/want/want.service.ts";
import { getListKeyboard } from "../services/getListKeyboard.ts";

export async function wantAction(bot: any) {
  bot.action(/wantButtonId:(.+)/, async (ctx: any) => {
    const id = Number(ctx.match[1]);
    const item = await getWantById(id);

    const keyboard = await getListKeyboard([], {
      backButtonAction: "menuButtonId:1",
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
