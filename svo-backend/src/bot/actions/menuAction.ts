import { returnKeyboard } from "../keyboards/returnKeyboard.ts";
import { wantKeyboard } from "../keyboards/wantKeyboard.ts";
import { helpKeyboard } from "../keyboards/helpKeyboard.ts";
import { employmentKeyboard } from "../keyboards/employmentKeyboard.ts";
import { faqKeyboard } from "../keyboards/faqKeyboard.ts";
import { fundKeyboard } from "../keyboards/fundKeyboard.ts";
import { feedbackKeyboard } from "../keyboards/feedbackKeyboard.ts";
import { getMenuById } from "../../prisma/modules/menu/menu.service.ts";

export async function menuAction(bot: any) {
  bot.action(/menuButtonId:(.+)/, async (ctx: any) => {
    const id = Number(ctx.match[1]);
    const item = await getMenuById(id);

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
