import { ActionController } from "../../controllers/action.controller.ts";
import { getListKeyboard } from "../services/getListKeyboard.ts";

export async function menuAction(bot: any) {
  bot.action(/menuButtonId:(.+)/, async (ctx: any) => {
    const id = Number(ctx.match[1]);
    const item = await new ActionController().getById(id);
    const buttons = await new ActionController().getByParentId(id);
    const parentId = item?.parent_id ?? null;
    const keyboard = await getListKeyboard(buttons, {
      buttonAction: "submenuButtonId",
      showBackButton: parentId !== null,
      backButtonAction: parentId !== null ? `menuButtonId:${parentId}` : "",
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
