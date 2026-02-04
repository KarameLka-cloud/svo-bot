import { Keyboard } from "@maxhub/max-bot-api";
import { getListKeyboard } from "../services/getListKeyboard.ts";
import { FundController } from "../../controllers/fund.controller.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;
const fundController = new FundController();

export async function fundKeyboard(): Promise<KeyboardType> {
  const buttons = await fundController.getAll();

  const keyboard = await getListKeyboard(buttons, {
    buttonAction: "fundButtonId",
  });
  return keyboard;
}
