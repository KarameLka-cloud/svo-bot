import { sendWelcome } from "../services/welcome.service.ts";

export async function startAction(bot: any) {
  return bot.command("start", sendWelcome);
}
