import { sendWelcome } from "../services/sendWelcome.ts";

export async function botStartedAction(bot: any) {
  return bot.on("bot_started", sendWelcome);
}
