import { wantRelationsClient } from "../../clients.ts";

export const getWantRelations = () => {
  return wantRelationsClient.findMany({
    include: {
      want: true,
    },
    orderBy: {
      id: "asc",
    },
  });
};

export const getWantRelationById = (id: number) => {
  return wantRelationsClient.findUnique({
    where: {
      id,
    },
  });
};

export const getWantRelationByWantId = (id: number) => {
  return wantRelationsClient.findMany({
    where: {
      want_id: id,
    },
    orderBy: {
      id: "asc",
    },
  });
};
