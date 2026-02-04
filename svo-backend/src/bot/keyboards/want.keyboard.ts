import { Keyboard } from "@maxhub/max-bot-api";
import { getListKeyboard } from "../services/getListKeyboard.ts";
import {
  WantController,
  WantRelationsController,
} from "../../controllers/want.controller.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;
const wantController = new WantController();
const wantRelationsController = new WantRelationsController();

export async function wantKeyboard(): Promise<KeyboardType> {
  const buttons = await wantController.getAll();

  const keyboard = await getListKeyboard(buttons, {
    buttonAction: "wantButtonId",
  });
  return keyboard;
}

export async function wantRelationKeyboard(id: number): Promise<KeyboardType> {
  const buttons = await wantRelationsController.getWantRelationByWantId(id);

  const keyboard = await getListKeyboard(buttons, {
    buttonAction: "wantRelationButtonId",
    backButtonAction: "menuButtonId:1",
    showBackButton: true,
  });
  return keyboard;
}
