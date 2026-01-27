import { Keyboard } from "@maxhub/max-bot-api";
import { getFaq } from "../../prisma/modules/faq/faq.service.ts";
import { getListKeyboard } from "../services/getListKeyboard.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;

export async function faqKeyboard(): Promise<KeyboardType> {
  const buttons = await getFaq();

  const keyboard = await getListKeyboard(buttons, {
    buttonAction: "faqButtonId",
  });
  return keyboard;
}
