import { Keyboard } from "@maxhub/max-bot-api";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;

export const returnKeyboard: KeyboardType = Keyboard.inlineKeyboard([
  [
    Keyboard.button.callback("Вернуться на главную", "returnMainMenu", {
      intent: "default",
    }),
  ],
]);
