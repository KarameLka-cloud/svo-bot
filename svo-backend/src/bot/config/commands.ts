export function registerCommands(bot: any) {
  bot.api.setMyCommands([{ name: "start", description: "Добро пожаловать!" }]);
}
