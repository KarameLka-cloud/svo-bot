import { helpClient } from "../../clients.ts";

export const getHelp = () => {
  return helpClient.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export const getHelpById = (id: number) => {
  return helpClient.findUnique({
    where: {
      id,
    },
  });
};
