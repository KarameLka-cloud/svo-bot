import { ActionController } from "../../controllers/action.controller.ts";
import { getListKeyboard } from "../utils/listFormation.ts";

export async function menuAction(bot: any) {
  bot.action(/menuButtonId:(.+)/, async (ctx: any) => {
    const id = Number(ctx.match[1]);
    let item;
    let buttons;
    let parentId;
    let keyboard;

    try {
      item = await new ActionController().getById(id);
      buttons = await new ActionController().getByParentId(id);
      parentId = item?.parent_id ?? null;
      keyboard = await getListKeyboard(buttons, {
        buttonAction: "submenuButtonId",
        showBackButton: parentId !== null,
        backButtonAction: parentId !== null ? `menuButtonId:${parentId}` : "",
      });
    } catch (e) {
      await ctx.reply("❌ Возникла ошибка", {
        format: "html",
      });
      console.log(e);
    }
    // const item = await new ActionController().getById(id);
    // const buttons = await new ActionController().getByParentId(id);
    // const parentId = item?.parent_id ?? null;
    // const keyboard = await getListKeyboard(buttons, {
    //   buttonAction: "submenuButtonId",
    //   showBackButton: parentId !== null,
    //   backButtonAction: parentId !== null ? `menuButtonId:${parentId}` : "",
    // });

    await ctx.answerOnCallback({
      message: {
        text: `${item?.message}`,
        format: "html",
        attachments: [keyboard ?? []],
      },
    });
  });
}
