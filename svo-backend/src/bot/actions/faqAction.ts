import { getFaqById } from "../../prisma/modules/faq/faq.service.ts";
import { getListKeyboard } from "../services/getListKeyboard.ts";

export async function faqAction(bot: any) {
  bot.action(/faqButtonId:(.+)/, async (ctx: any) => {
    const id = Number(ctx.match[1]);
    const faqItem = await getFaqById(id);

    const keyboard = await getListKeyboard([], {
      backButtonAction: "mainButtonId:4",
      showBackButton: true,
      showReturnButton: true,
    });

    await ctx.answerOnCallback({
      message: {
        text: `${faqItem?.question}\n\n${faqItem?.answer}`,
        format: "html",
        attachments: [keyboard],
      },
    });
  });
}
