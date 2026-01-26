export function registerCommands(bot: any) {
  bot.api.setMyCommands([{ name: "start", description: "Начать беседу с «чистого листа»!" }]);
}
