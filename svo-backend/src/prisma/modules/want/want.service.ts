import { wantClient } from "../../clients.ts";

export const getWant = () => {
  return wantClient.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export const getWantById = (id: number) => {
  return wantClient.findUnique({
    where: {
      id,
    },
  });
};
