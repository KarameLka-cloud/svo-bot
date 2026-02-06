import { sendWelcome } from "../services/sendWelcome.ts";

export async function startedAction(bot: any) {
  return bot.on("bot_started", sendWelcome);
}
