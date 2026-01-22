import { Keyboard } from "@maxhub/max-bot-api";
import { getMain } from "../../prisma/modules/main/main.service.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;

export async function mainKeyboard(): Promise<KeyboardType> {
  const mainButtons = await getMain();

  const buttons = mainButtons.map((button) => [
    Keyboard.button.callback(button.name_button, `mainButtonId:${button.id}`, {
      intent: "default",
    }),
  ]);

  return Keyboard.inlineKeyboard(buttons);
}
