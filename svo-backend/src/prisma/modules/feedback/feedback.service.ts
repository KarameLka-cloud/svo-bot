import { feedbackClient } from "../../clients.ts";

export const getFeedback = () => {
  return feedbackClient.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export const getFeedbackById = (id: number) => {
  return feedbackClient.findUnique({
    where: {
      id,
    },
  });
};
