import { mainClient } from "../../clients.ts";

export const getMain = () => {
  return mainClient.findMany({
    orderBy: {
      id: "asc",
    },
  });
};
