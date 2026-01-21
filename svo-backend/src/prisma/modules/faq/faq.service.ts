import { faqClient } from "../../clients.ts";

export const getFaq = () => {
  return faqClient.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export const getFaqById = (id: number) => {
  return faqClient.findUnique({
    where: {
      id,
    },
  });
};
