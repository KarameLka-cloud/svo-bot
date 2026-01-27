import { Keyboard } from "@maxhub/max-bot-api";
import { getFund } from "../../prisma/modules/fund/fund.service.ts";
import { getListKeyboard } from "../services/getListKeyboard.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;

export async function fundKeyboard(): Promise<KeyboardType> {
  const buttons = await getFund();

  const keyboard = await getListKeyboard(buttons, {
    buttonAction: "fundButtonId",
  });
  return keyboard;
}
