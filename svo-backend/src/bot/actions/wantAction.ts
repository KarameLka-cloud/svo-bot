import { getWantById } from "../../prisma/modules/want/want.service.ts";
import { wantRelationKeyboard } from "../keyboards/wantKeyboard.ts";
import { getWantRelationById } from "../../prisma/modules/want/want_relations.service.ts";
import { getListKeyboard } from "../services/getListKeyboard.ts";

export async function wantAction(bot: any) {
  bot.action(/wantButtonId:(.+)/, async (ctx: any) => {
    const id = Number(ctx.match[1]);
    const item = await getWantById(id);

    const keyboard = await wantRelationKeyboard(id);

    await ctx.answerOnCallback({
      message: {
        text: `${item?.message ?? item?.name_button}`,
        format: "html",
        attachments: [keyboard],
      },
    });
  });
}

export async function wantRelationAction(bot: any) {
  bot.action(/wantRelationButtonId:(.+)/, async (ctx: any) => {
    const id = Number(ctx.match[1]);
    const item = await getWantRelationById(id);

    const keyboard = await getListKeyboard([], {
      showBackButton: true,
      backButtonAction: `wantButtonId:${item?.want_id}`,
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
