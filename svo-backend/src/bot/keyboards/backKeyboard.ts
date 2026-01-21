import { Keyboard } from "@maxhub/max-bot-api";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;

const backKeyboard: KeyboardType = Keyboard.inlineKeyboard([
  [
    Keyboard.button.callback("Назад", "returnMainMenu", {
      intent: "default",
    }),
  ],
]);

export { backKeyboard };
