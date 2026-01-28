import { helpRelationsClient } from "../../clients.ts";

export const getHelpRelations = () => {
  return helpRelationsClient.findMany({
    include: {
      help: true,
    },
    orderBy: {
      id: "asc",
    },
  });
};

export const getHelpRelationById = (id: number) => {
  return helpRelationsClient.findUnique({
    where: {
      id,
    },
  });
};

export const getHelpRelationByHelpId = (id: number) => {
  return helpRelationsClient.findMany({
    where: {
      help_id: id,
    },
    orderBy: {
      id: "asc",
    },
  });
};
