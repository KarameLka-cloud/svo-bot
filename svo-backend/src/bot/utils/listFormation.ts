import { Keyboard } from "@maxhub/max-bot-api";
import { returnButton } from "../buttons/return.button.ts";
import { backButton } from "../buttons/back.button.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;

interface KeyboardOptions {
  buttonAction?: string;
  backButtonAction?: string;
  showBackButton?: boolean;
  showReturnButton?: boolean;
}

export async function getListKeyboard(
  array: any[] = [],
  options: KeyboardOptions = {},
): Promise<KeyboardType> {
  const {
    buttonAction = "",
    backButtonAction = "",
    showBackButton = false,
    showReturnButton = true,
  } = options;

  const bButton = showBackButton
    ? backButton(Keyboard, backButtonAction)
    : null;
  const rButton = showReturnButton ? returnButton(Keyboard) : null;

  const buttons = array
    .map((item: any) => {
      if (item.url) {
        return [Keyboard.button.link(item.name_button, item.url)];
      } else if (item.message) {
        return [
          Keyboard.button.callback(
            item.name_button,
            `${buttonAction}:${item.id}`,
            {
              intent: "default",
            },
          ),
        ];
      }
      return null;
    })
    .filter((btn): btn is any[] => btn !== null);

  if (bButton) buttons.push(bButton);
  if (rButton) buttons.push(rButton);

  return Keyboard.inlineKeyboard(buttons);
}
