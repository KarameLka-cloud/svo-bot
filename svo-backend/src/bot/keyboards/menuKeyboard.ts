import { Keyboard } from "@maxhub/max-bot-api";
import { getMenu } from "../../prisma/modules/menu/menu.service.ts";
import { getListKeyboard } from "../services/getListKeyboard.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;

export async function menuKeyboard(): Promise<KeyboardType> {
  const buttons = await getMenu();

  const keyboard = await getListKeyboard(buttons, {
    buttonAction: "menuButtonId",
    showReturnButton: false,
  });
  return keyboard;
}
