import { Keyboard } from "@maxhub/max-bot-api";
import { returnButton } from "../buttons/return.button.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;

export const returnKeyboard: KeyboardType = Keyboard.inlineKeyboard([
  returnButton(Keyboard),
]);
