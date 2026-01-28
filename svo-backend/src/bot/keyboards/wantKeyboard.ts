import { Keyboard } from "@maxhub/max-bot-api";
import { getWant } from "../../prisma/modules/want/want.service.ts";
import { getWantRelationByWantId } from "../../prisma/modules/want/want_relations.service.ts";
import { getListKeyboard } from "../services/getListKeyboard.ts";

type KeyboardType = ReturnType<typeof Keyboard.inlineKeyboard>;

export async function wantKeyboard(): Promise<KeyboardType> {
  const buttons = await getWant();

  const keyboard = await getListKeyboard(buttons, {
    buttonAction: "wantButtonId",
  });
  return keyboard;
}

export async function wantRelationKeyboard(id: number): Promise<KeyboardType> {
  const buttons = await getWantRelationByWantId(id);

  const keyboard = await getListKeyboard(buttons, {
    buttonAction: "wantRelationButtonId",
    backButtonAction: "menuButtonId:1",
    showBackButton: true,
  });
  return keyboard;
}
