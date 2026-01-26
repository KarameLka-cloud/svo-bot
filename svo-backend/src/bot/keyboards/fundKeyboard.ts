import { Keyboard } from "@maxhub/max-bot-api";
import { getFund } from "../../prisma/modules/fund/fund.service.ts";
import { getListKeyboard } from "../services/getListKeyboard.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;

export async function fundKeyboard(): Promise<KeyboardType> {
  const fundButtons = await getFund();

  const keyboard = await getListKeyboard(fundButtons, {
    buttonAction: "fundButtonId",
    showReturnButton: true,
  });
  return keyboard;
}
