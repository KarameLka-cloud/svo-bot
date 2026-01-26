import { Keyboard } from "@maxhub/max-bot-api";
import { getMain } from "../../prisma/modules/menu/menu.service.ts";
import { getListKeyboard } from "../services/getListKeyboard.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;

export async function mainKeyboard(): Promise<KeyboardType> {
  const mainButtons = await getMain();

  const keyboard = await getListKeyboard(mainButtons, {
    buttonAction: "mainButtonId",
  });
  return keyboard;
}
