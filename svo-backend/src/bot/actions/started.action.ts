import { sendWelcome } from "../services/welcome.service.ts";

export async function startedAction(bot: any) {
  return bot.on("bot_started", sendWelcome);
}
