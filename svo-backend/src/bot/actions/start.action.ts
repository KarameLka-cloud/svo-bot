import { sendWelcome } from "../services/sendWelcome.ts";

export async function startAction(bot: any) {
  return bot.command("start", sendWelcome);
}
