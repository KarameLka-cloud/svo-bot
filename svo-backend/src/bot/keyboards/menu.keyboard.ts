import { Keyboard } from "@maxhub/max-bot-api";
import { getListKeyboard } from "../utils/listFormation.ts";
import { ActionController } from "../../controllers/action.controller.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;

export async function menuKeyboard(): Promise<KeyboardType> {
  let keyboard: KeyboardType | undefined;

  try {
    const buttons = await new ActionController().getMainButton();

    keyboard = await getListKeyboard(buttons, {
      buttonAction: "menuButtonId",
      showReturnButton: false,
    });
  } catch (e) {
    console.log(e);
  }

  return keyboard ?? Keyboard.inlineKeyboard([]);
}
