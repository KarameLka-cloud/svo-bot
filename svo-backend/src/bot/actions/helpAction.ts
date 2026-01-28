import { getHelpById } from "../../prisma/modules/help/help.service.ts";
import { helpRelationKeyboard } from "../keyboards/helpKeyboard.ts";
import { getHelpRelationById } from "../../prisma/modules/help/help_relations.service.ts";
import { getListKeyboard } from "../services/getListKeyboard.ts";

export async function helpAction(bot: any) {
  bot.action(/helpButtonId:(.+)/, async (ctx: any) => {
    const id = Number(ctx.match[1]);
    const item = await getHelpById(id);

    const keyboard = await helpRelationKeyboard(id);

    await ctx.answerOnCallback({
      message: {
        text: `${item?.message ?? item?.name_button}`,
        format: "html",
        attachments: [keyboard],
      },
    });
  });
}

export async function helpRelationAction(bot: any) {
  bot.action(/helpRelationButtonId:(.+)/, async (ctx: any) => {
    const id = Number(ctx.match[1]);
    const item = await getHelpRelationById(id);

    const keyboard = await getListKeyboard([], {
      showBackButton: true,
      backButtonAction: `helpButtonId:${item?.help_id}`,
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
