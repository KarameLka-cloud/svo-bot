import { Keyboard } from "@maxhub/max-bot-api";
import { returnButton } from "../buttons/returnButton.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;
const button = returnButton(Keyboard);

export const returnKeyboard: KeyboardType = Keyboard.inlineKeyboard([button]);
