import { getFundById } from "../../prisma/modules/fund/fund.service.ts";
import { getListKeyboard } from "../services/getListKeyboard.ts";

export async function fundAction(bot: any) {
  bot.action(/fundButtonId:(.+)/, async (ctx: any) => {
    const id = Number(ctx.match[1]);
    const item = await getFundById(id);
    const keyboard = await getListKeyboard([], {
      backButtonAction: "menuButtonId:5",
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
