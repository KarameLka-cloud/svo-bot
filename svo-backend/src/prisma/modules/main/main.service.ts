import { mainClient } from "../../clients.ts";

export const getMain = () => {
  return mainClient.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export const getMainById = (id: number) => {
  return mainClient.findUnique({
    where: {
      id,
    },
  });
};
