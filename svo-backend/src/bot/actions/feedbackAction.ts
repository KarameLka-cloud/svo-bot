import { getFeedbackById } from "../../prisma/modules/feedback/feedback.service.ts";
import { getListKeyboard } from "../services/getListKeyboard.ts";

export async function feedbackAction(bot: any) {
  bot.action(/feedbackButtonId:(.+)/, async (ctx: any) => {
    const id = Number(ctx.match[1]);
    const item = await getFeedbackById(id);
    const keyboard = await getListKeyboard([], {
      backButtonAction: "menuButtonId:6",
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
