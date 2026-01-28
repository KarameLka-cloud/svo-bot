import { getFaqById } from "../../prisma/modules/faq/faq.service.ts";
import { getListKeyboard } from "../services/getListKeyboard.ts";

export async function faqAction(bot: any) {
  bot.action(/faqButtonId:(.+)/, async (ctx: any) => {
    const id = Number(ctx.match[1]);
    const item = await getFaqById(id);
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
