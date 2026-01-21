import { feedback } from "../../clients.ts";

export const getFeedback = () => {
  return feedback.findMany({
    orderBy: {
      id: "asc",
    },
  });
};
