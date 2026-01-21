import { welcomeAction } from "./welcomeAction.ts";

export async function botStartedAction(bot: any) {
  return bot.on("bot_started", welcomeAction);
}
