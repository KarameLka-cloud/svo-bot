import { Keyboard } from "@maxhub/max-bot-api";
import { getMain } from "../../prisma/modules/main/main.service.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;

export async function mainKeyboard(): Promise<KeyboardType> {
  const mainButtons = await getMain();

  const buttons = mainButtons.map((button) => [
    Keyboard.button.callback(
      button.title,
      `buttonId:${button.id}:${button.title}`,
      {
        intent: "default",
      },
    ),
  ]);

  return Keyboard.inlineKeyboard(buttons);
}
