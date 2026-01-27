import { getEmploymentById } from "../../prisma/modules/employment/employment.service.ts";
import { getListKeyboard } from "../services/getListKeyboard.ts";

export async function employmentAction(bot: any) {
  bot.action(/employmentButtonId:(.+)/, async (ctx: any) => {
    const id = Number(ctx.match[1]);
    const item = await getEmploymentById(id);

    const keyboard = await getListKeyboard([], {
      backButtonAction: "menuButtonId:3",
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
