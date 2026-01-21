import { Keyboard } from "@maxhub/max-bot-api";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;

const returnMainMenuKeyboard = (): KeyboardType => {
  return Keyboard.inlineKeyboard([
    [
      Keyboard.button.callback("🔃 Возврат на главное меню", "returnMainMenu", {
        intent: "default",
      }),
    ],
  ]);
};

export { returnMainMenuKeyboard };
