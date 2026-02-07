import { Keyboard } from "@maxhub/max-bot-api";
import { getListKeyboard } from "../services/getListKeyboard.ts";
import { ActionController } from "../../controllers/action.controller.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;

export async function menuKeyboard(): Promise<KeyboardType> {
  const buttons = await new ActionController().getMainButton();

  const keyboard = await getListKeyboard(buttons, {
    buttonAction: "menuButtonId",
    showReturnButton: false,
  });
  return keyboard;
}
