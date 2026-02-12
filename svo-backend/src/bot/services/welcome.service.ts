import { getUserName } from "../utils/userName.ts";
import { menuKeyboard } from "../keyboards/menu.keyboard.ts";
import { StartController } from "../../controllers/start.controller.ts";
import { VisitorsController } from "../../controllers/visitors.controller.ts";

export async function sendWelcome(ctx: any) {
  const userId = ctx.user.user_id;
  const userName = await getUserName(ctx);

  try {
    const { message } = await new StartController().getStartMessageByType(
      "welcome",
    );

    await ctx.reply(
      `<h1>👋 Здравствуйте, ${userName}.</h1>

    ${message}`,
      {
        format: "html",
      },
    );
  } catch (e) {
    console.error(e);
    await ctx.reply("Возникла ошибка", {
      format: "html",
    });
  }

  try {
    const menuButtons = await menuKeyboard();
    await ctx.reply("🗃️ Выберите интересующий раздел:", {
      format: "html",
      attachments: [menuButtons],
    });
  } catch (e) {
    console.error(e);
    await ctx.reply("Возникла ошибка", {
      format: "html",
    });
  }

  try {
    const visitorsController = new VisitorsController();
    await visitorsController.create({
      user_id: userId,
      name: userName,
    });
  } catch (e) {
    await ctx.reply("Возникла ошибка", {
      format: "html",
    });
    console.log(e);
  }
}
