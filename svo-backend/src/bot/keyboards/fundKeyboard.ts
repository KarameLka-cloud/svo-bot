import { Keyboard } from "@maxhub/max-bot-api";
import { getFund } from "../../prisma/modules/fund/fund.service.ts";
import { returnButton } from "../buttons/returnButton.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;

export async function fundKeyboard(): Promise<KeyboardType> {
  const fundButtons = await getFund();
  const rButton = returnButton(Keyboard);

  const buttons = fundButtons.map((button) => [
    Keyboard.button.callback(button.name_button, `fundButtonId:${button.id}`, {
      intent: "default",
    }),
  ]);

  buttons.push(rButton);

  return Keyboard.inlineKeyboard(buttons);
}
