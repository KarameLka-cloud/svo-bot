import { Keyboard } from "@maxhub/max-bot-api";
import { getListKeyboard } from "../services/getListKeyboard.ts";
import { MenuController } from "../../controllers/menu.controller.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;
const menuController = new MenuController();

export async function menuKeyboard(): Promise<KeyboardType> {
  const buttons = await menuController.getAll();

  const keyboard = await getListKeyboard(buttons, {
    buttonAction: "menuButtonId",
    showReturnButton: false,
  });
  return keyboard;
}
