import { fundClient } from "../../clients.ts";

export const getFund = () => {
  return fundClient.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export const getFundById = (id: number) => {
  return fundClient.findUnique({
    where: {
      id,
    },
  });
};
