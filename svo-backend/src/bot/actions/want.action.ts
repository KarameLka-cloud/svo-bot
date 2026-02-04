import { wantRelationKeyboard } from "../keyboards/want.keyboard.ts";
import { getListKeyboard } from "../services/getListKeyboard.ts";
import {
  WantController,
  WantRelationsController,
} from "../../controllers/want.controller.ts";

const wantRelationsController = new WantRelationsController();

export async function wantAction(bot: any) {
  bot.action(/wantButtonId:(.+)/, async (ctx: any) => {
    const id = Number(ctx.match[1]);
    const item = await new WantController().getById(id);

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
    const item = await wantRelationsController.getById(id);

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
