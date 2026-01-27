import { employmentClient } from "../../clients.ts";

export const getEmployment = () => {
  return employmentClient.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export const getEmploymentById = (id: number) => {
  return employmentClient.findUnique({
    where: {
      id,
    },
  });
};
