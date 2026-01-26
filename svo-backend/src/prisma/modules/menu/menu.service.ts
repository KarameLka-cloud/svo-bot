import { menuClient } from "../../clients.ts";

export const getMain = () => {
  return menuClient.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export const getMainById = (id: number) => {
  return menuClient.findUnique({
    where: {
      id,
    },
  });
};
