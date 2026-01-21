interface User {
  id?: string;
  name?: string;
}

async function getUserName(ctx: any) {
  return (ctx.user.name as unknown as User) ?? "Пользователь";
}

export default getUserName;
