export const backButton = (Keyboard: any, action: string) => {
  return [
    Keyboard.button.callback("↩️ Назад", action, {
      intent: "default",
    }),
  ];
};
