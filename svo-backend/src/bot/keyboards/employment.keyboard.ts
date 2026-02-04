import { Keyboard } from "@maxhub/max-bot-api";
import { getListKeyboard } from "../services/getListKeyboard.ts";
import { EmploymentController } from "../../controllers/employment.controller.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;
const employmentController = new EmploymentController();

export async function employmentKeyboard(): Promise<KeyboardType> {
  const buttons = await employmentController.getAll();

  const keyboard = await getListKeyboard(buttons, {
    buttonAction: "employmentButtonId",
  });
  return keyboard;
}
