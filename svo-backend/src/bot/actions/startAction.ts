import { welcomeAction } from "./welcomeAction.ts";

export async function startAction(bot: any) {
  return bot.command("start", welcomeAction);
}
