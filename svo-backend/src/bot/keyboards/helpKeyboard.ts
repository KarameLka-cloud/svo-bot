import { Keyboard } from "@maxhub/max-bot-api";
import { getHelp } from "../../prisma/modules/help/help.service.ts";
import { getListKeyboard } from "../services/getListKeyboard.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;

export async function helpKeyboard(): Promise<KeyboardType> {
  const buttons = await getHelp();

  const keyboard = await getListKeyboard(buttons, {
    buttonAction: "helpButtonId",
  });
  return keyboard;
}
