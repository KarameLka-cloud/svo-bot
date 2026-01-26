import { faqKeyboard } from "../keyboards/faqKeyboard.ts";
import { fundKeyboard } from "../keyboards/fundKeyboard.ts";
import { feedbackKeyboard } from "../keyboards/feedbackKeyboard.ts";
import { returnKeyboard } from "../keyboards/returnKeyboard.ts";
import { getMainById } from "../../prisma/modules/main/main.service.ts";

export async function mainAction(bot: any) {
  bot.action(/mainButtonId:(.+)/, async (ctx: any) => {
    const id = Number(ctx.match[1]);
    const mainItem = await getMainById(id);

    const faqButtons = await faqKeyboard();
    const fundButtons = await fundKeyboard();
    const feedbackButtons = await feedbackKeyboard();

    switch (id) {
      case 1: {
        await ctx.answerOnCallback({
          message: {
            text: `${mainItem?.message}`,
            format: "html",
            attachments: [returnKeyboard],
          },
        });
        break;
      }
      case 2: {
        await ctx.answerOnCallback({
          message: {
            text: `${mainItem?.message}`,
            format: "html",
            attachments: [returnKeyboard],
          },
        });
        break;
      }
      case 3: {
        await ctx.answerOnCallback({
          message: {
            text: `${mainItem?.message}`,
            format: "html",
            attachments: [returnKeyboard],
          },
        });
        break;
      }
      case 4: {
        await ctx.answerOnCallback({
          message: {
            text: `${mainItem?.message}`,
            format: "html",
            attachments: [faqButtons],
          },
        });
        break;
      }
      case 5: {
        await ctx.answerOnCallback({
          message: {
            text: `${mainItem?.message}`,
            format: "html",
            attachments: [fundButtons],
          },
        });
        break;
      }
      case 6: {
        await ctx.answerOnCallback({
          message: {
            text: `${mainItem?.message ?? mainItem?.name_button}`,
            format: "html",
            attachments: [feedbackButtons],
          },
        });
        break;
      }
    }
  });
}
