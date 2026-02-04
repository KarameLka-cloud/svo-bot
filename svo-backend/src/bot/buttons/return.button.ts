export const returnButton = (Keyboard: any) => {
  return [
    Keyboard.button.callback(
      "🏠 Вернуться на главную страницу",
      "returnMainMenu",
      {
        intent: "default",
      },
    ),
  ];
};
