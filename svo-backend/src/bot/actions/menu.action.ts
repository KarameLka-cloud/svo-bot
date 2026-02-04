import { returnKeyboard } from "../keyboards/return.keyboard.ts";
import { wantKeyboard } from "../keyboards/want.keyboard.ts";
import { helpKeyboard } from "../keyboards/help.keyboard.ts";
import { employmentKeyboard } from "../keyboards/employment.keyboard.ts";
import { faqKeyboard } from "../keyboards/faq.keyboard.ts";
import { fundKeyboard } from "../keyboards/fund.keyboard.ts";
import { feedbackKeyboard } from "../keyboards/feedback.keyboard.ts";
import { MenuController } from "../../controllers/menu.controller.ts";

export async function menuAction(bot: any) {
  bot.action(/menuButtonId:(.+)/, async (ctx: any) => {
    const id = Number(ctx.match[1]);
    const item = await new MenuController().getById(id);

    const wantButtons = await wantKeyboard();
    const helpButtons = await helpKeyboard();
    const employmentButtons = await employmentKeyboard();
    const faqButtons = await faqKeyboard();
    const fundButtons = await fundKeyboard();
    const feedbackButtons = await feedbackKeyboard();

    switch (id) {
      case 1: {
        await ctx.answerOnCallback({
          message: {
            text: `${item?.message ?? item?.name_button}`,
            format: "html",
            attachments: [wantButtons],
          },
        });
        break;
      }
      case 2: {
        await ctx.answerOnCallback({
          message: {
            text: `${item?.message ?? item?.name_button}`,
            format: "html",
            attachments: [helpButtons],
          },
        });
        break;
      }
      case 3: {
        await ctx.answerOnCallback({
          message: {
            text: `${item?.message ?? item?.name_button}`,
            format: "html",
            attachments: [employmentButtons],
          },
        });
        break;
      }
      case 4: {
        await ctx.answerOnCallback({
          message: {
            text: `${item?.message ?? item?.name_button}`,
            format: "html",
            attachments: [faqButtons],
          },
        });
        break;
      }
      case 5: {
        await ctx.answerOnCallback({
          message: {
            text: `${item?.message ?? item?.name_button}`,
            format: "html",
            attachments: [fundButtons],
          },
        });
        break;
      }
      case 6: {
        await ctx.answerOnCallback({
          message: {
            text: `${item?.message ?? item?.name_button}`,
            format: "html",
            attachments: [feedbackButtons],
          },
        });
        break;
      }
      default: {
        await ctx.answerOnCallback({
          message: {
            text: `${item?.message ?? item?.name_button}`,
            format: "html",
            attachments: [returnKeyboard],
          },
        });
        break;
      }
    }
  });
}
