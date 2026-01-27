import { Keyboard } from "@maxhub/max-bot-api";
import { getEmployment } from "../../prisma/modules/employment/employment.service.ts";
import { getListKeyboard } from "../services/getListKeyboard.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;

export async function employmentKeyboard(): Promise<KeyboardType> {
  const buttons = await getEmployment();

  const keyboard = await getListKeyboard(buttons, {
    buttonAction: "employmentButtonId",
  });
  return keyboard;
}
