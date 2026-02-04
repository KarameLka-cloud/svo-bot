import { getListKeyboard } from "../services/getListKeyboard.ts";
import { EmploymentController } from "../../controllers/employment.controller.ts";

export async function employmentAction(bot: any) {
  bot.action(/employmentButtonId:(.+)/, async (ctx: any) => {
    const id = Number(ctx.match[1]);
    const item = await new EmploymentController().getById(id);
    const keyboard = await getListKeyboard([], {
      backButtonAction: "menuButtonId:3",
      showBackButton: true,
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
