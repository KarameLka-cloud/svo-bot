import { menuClient } from "../../clients.ts";

export const getMenu = () => {
  return menuClient.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export const getMenuById = (id: number) => {
  return menuClient.findUnique({
    where: {
      id,
    },
  });
};
