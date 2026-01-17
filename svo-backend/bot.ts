import dotenv from "dotenv";
dotenv.config();
import { Bot, Keyboard } from "@maxhub/max-bot-api";

interface User {
  id?: string;
  name?: string;
}

const token = process.env.BOT_TOKEN;
if (!token) {
  throw new Error("Environment variable BOT_TOKEN is not set");
}

const bot: Bot = new Bot(token);

bot.api.setMyCommands([{ name: "start", description: "Добро пожаловать!" }]);

const startKeyboard = Keyboard.inlineKeyboard([
  [
    Keyboard.button.link("📊 Статистика", "https://minister.service.mfc38.ru/"),
    Keyboard.button.callback("📄 Сводка", "summary", { intent: "default" }),
  ],
]);

function helloText(userName: string) {
  return `<h1>👋 Здравствуйте, ${userName}.</h1>
    <br/>
    🤖 Я бот-помощник по вопросам военной службы по контракту в Иркутской области.
    <br/>
    📋 С моей помощью можно:
      • подать заявку на службу по контракту;
      • узнать о мерах поддержки для военнослужащих и членов их семей, ветеранов боевых действий;
      • узнать о содействии в трудоустройстве;
      • узнать ответы на часто задаваемые вопросы.
    <br/>
    📄 Список команд бота:
    /start — Вы перезапустите бота, начнете беседу с «чистого листа».`;
}

bot.on("bot_started", async (ctx) => {
  const user = ctx.user as unknown as User;
  const userName = user?.name ?? "Пользователь";
  // const userName = ctx.user.name;
  await ctx.reply(helloText(userName), {
    format: "html",
  });

  await ctx.reply("🗃️ Выберите интересующий раздел:", {
    format: "html",
    attachments: [startKeyboard],
  });
});

bot.command("start", async (ctx) => {
  const user = ctx.user as unknown as User;
  const userName = user?.name ?? "Пользователь";
  // const userName = ctx.user.name;
  await ctx.reply(helloText(userName), {
    format: "html",
  });

  await ctx.reply("Выберите интересующий раздел:", {
    format: "html",
    attachments: [startKeyboard],
  });
});

bot.start();

export default bot;
