import { getListKeyboard } from "../services/getListKeyboard.ts";
import { FaqController } from "../../controllers/faq.controller.ts";

export async function faqAction(bot: any) {
  bot.action(/faqButtonId:(.+)/, async (ctx: any) => {
    const id = Number(ctx.match[1]);
    const item = await new FaqController().getById(id);
    const keyboard = await getListKeyboard([], {
      backButtonAction: "menuButtonId:4",
      showBackButton: true,
    });

    await ctx.answerOnCallback({
      message: {
        text: `${item?.question}\n\n${item?.answer}`,
        format: "html",
        attachments: [keyboard],
      },
    });
  });
}
