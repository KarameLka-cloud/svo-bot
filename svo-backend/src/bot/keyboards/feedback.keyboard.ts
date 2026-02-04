import { Keyboard } from "@maxhub/max-bot-api";
import { getListKeyboard } from "../services/getListKeyboard.ts";
import { FeedbackController } from "../../controllers/feedback.controller.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;
const feedbackController = new FeedbackController();

export async function feedbackKeyboard(): Promise<KeyboardType> {
  const buttons = await feedbackController.getAll();

  const keyboard = await getListKeyboard(buttons, {
    buttonAction: "feedbackButtonId",
  });
  return keyboard;
}
