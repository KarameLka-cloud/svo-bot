import { Keyboard } from "@maxhub/max-bot-api";
import { getFeedback } from "../../prisma/modules/feedback/feedback.service.ts";
import { returnButton } from "../buttons/returnButton.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;

export async function feedbackKeyboard(): Promise<KeyboardType> {
  const feedbackButtons = await getFeedback();
  const rButton = returnButton(Keyboard);

  const buttons = feedbackButtons.map((button) => [
    Keyboard.button.callback(
      button.name_button,
      `feedbackButtonId:${button.id}:${button.message}`,
      {
        intent: "default",
      },
    ),
  ]);

  buttons.push(
    [
      Keyboard.button.callback("Позвонить 117", "returnMainMenu", {
        intent: "default",
      }),
    ],
    rButton,
  );

  return Keyboard.inlineKeyboard(buttons);
}
