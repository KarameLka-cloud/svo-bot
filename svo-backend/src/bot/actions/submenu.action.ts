import { getListKeyboard } from "../services/getListKeyboard.ts";
import { ActionController } from "../../controllers/action.controller.ts";

export async function submenuAction(bot: any) {
  bot.action(/submenuButtonId:(.+)/, async (ctx: any) => {
    const id = Number(ctx.match[1]);
    const item = await new ActionController().getById(id);
    const buttons = await new ActionController().getByParentId(id);
    const keyboard = await getListKeyboard(buttons, {
      // showReturnButton: false,
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
