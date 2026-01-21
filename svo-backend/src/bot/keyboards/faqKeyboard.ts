import { Keyboard } from "@maxhub/max-bot-api";
import { getFaq } from "../../prisma/modules/faq/faq.service.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;

export async function faqKeyboard(): Promise<KeyboardType> {
  const faqButtons = await getFaq();

  const buttons = faqButtons.map((button) => [
    Keyboard.button.callback(
      button.question,
      `buttonId:${button.id}:${button.answer}`,
      {
        intent: "default",
      },
    ),
  ]);

  return Keyboard.inlineKeyboard(buttons);
}
