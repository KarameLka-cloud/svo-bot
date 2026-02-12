// import { Keyboard } from "@maxhub/max-bot-api";
// import { feedbackForm } from "../services/feedbackForm.ts";

// export async function feedbackAction(bot: any) {
//   return bot.command("обратная_связь", feedbackForm);
// }

// const pendingMessages: Map<string, string> = new Map();

// export async function feedback(bot: any) {
//   bot.on("message_created", async (ctx: any) => {
//     const content = ctx.message.body.text;
//     const userId = ctx.user.user_id;

//     if (content && userId) {
//       console.log("Введено пользователем:", content);

//       pendingMessages.set(userId, content);

//       console.log(pendingMessages);

//       const confirmKeyboard = Keyboard.inlineKeyboard([
//         [
//           Keyboard.button.callback("✅ Отправить", "confirm_feedback", {
//             intent: "default",
//           }),
//           Keyboard.button.callback("❌ Отмена", "cancel_feedback", {
//             intent: "default",
//           }),
//         ],
//       ]);

//       await ctx.reply(
//         `📋 Пожалуйста, подтвердите вашу заявку:\n\n"${content}"`,
//         {
//           format: "html",
//           attachments: [confirmKeyboard],
//         },
//       );
//     }
//   });

//   bot.action("confirm_feedback", async (ctx: any) => {
//     const userId = ctx.user.user_id;
//     if (!userId) return;

//     const message = pendingMessages.get(userId);

//     if (message) {
//       console.log("Отправлено ботом сообщение от пользователя:", message);
//       const sent = await ctx.reply("✅ Спасибо, заявка получена!");
//       console.log("Отправлено ботом:", sent);
//       pendingMessages.delete(userId);
//     }
//   });

//   bot.action("cancel_feedback", async (ctx: any) => {
//     const userId = ctx.user.user_id;
//     if (!userId) return;

//     console.log("Заявка отменена пользователем:", userId);
//     await ctx.reply("❌ Заявка отменена");
//     pendingMessages.delete(userId);
//   });
// }
