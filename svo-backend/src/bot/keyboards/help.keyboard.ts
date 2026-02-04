import { Keyboard } from "@maxhub/max-bot-api";
import { getListKeyboard } from "../services/getListKeyboard.ts";
import {
  HelpController,
  HelpRelationsController,
} from "../../controllers/help.controller.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;
const helpController = new HelpController();
const helpRelationsController = new HelpRelationsController();

export async function helpKeyboard(): Promise<KeyboardType> {
  const buttons = await helpController.getAll();

  const keyboard = await getListKeyboard(buttons, {
    buttonAction: "helpButtonId",
  });
  return keyboard;
}

export async function helpRelationKeyboard(id: number): Promise<KeyboardType> {
  const buttons = await helpRelationsController.getWantRelationByWantId(id);

  const keyboard = await getListKeyboard(buttons, {
    buttonAction: "helpRelationButtonId",
    backButtonAction: "menuButtonId:2",
    showBackButton: true,
  });
  return keyboard;
}
