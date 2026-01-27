import { Keyboard } from "@maxhub/max-bot-api";
import { getFeedback } from "../../prisma/modules/feedback/feedback.service.ts";
import { getListKeyboard } from "../services/getListKeyboard.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;

export async function feedbackKeyboard(): Promise<KeyboardType> {
  const buttons = await getFeedback();

  const keyboard = await getListKeyboard(buttons, {
    buttonAction: "feedbackButtonId",
  });
  return keyboard;
}
