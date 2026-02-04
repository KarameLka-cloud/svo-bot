import { helpRelationKeyboard } from "../keyboards/help.keyboard.ts";
import { getListKeyboard } from "../services/getListKeyboard.ts";
import {
  HelpController,
  HelpRelationsController,
} from "../../controllers/help.controller.ts";

export async function helpAction(bot: any) {
  bot.action(/helpButtonId:(.+)/, async (ctx: any) => {
    const id = Number(ctx.match[1]);
    const item = await new HelpController().getById(id);

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
    const item = await new HelpRelationsController().getById(id);

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
